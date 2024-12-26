import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { X } from 'lucide-react';
import axios from 'axios';
import { db, storage } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Grid } from '@mui/material';
import { translations } from '../../translations';
import logo from '../../../assets/LEONAIDOO.png';

const API_URL = import.meta.env.VITE_API_URL;

// Add these styled components
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 32px;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

const Title = styled.h1`
  color: #774800;
  font-size: 24px;
  margin: 0;
`;

const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  
  &:hover {
    border-color: #774800;
    color: #774800;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${props => props.show ? 1 : 0};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transition: all 0.3s ease-in-out;
`;

const FormCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  width: 90%;
  max-width: 800px;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
  transform: ${props => props.show ? 'translateY(0)' : 'translateY(-20px)'};
  transition: transform 0.3s ease-in-out;
`;

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 24px 16px;
  background: #f8f8f8;
  border-radius: 8px;
`;

const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
  
  &:not(:last-child):after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${props => props.$active || props.$completed ? '#774800' : '#e0e0e0'};
    top: 15px;
    left: 50%;
  }
`;

const StepCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${props => props.$active ? '#774800' : props.$completed ? '#8b5500' : '#e0e0e0'};
  color: ${props => props.$active || props.$completed ? 'white' : '#666'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  font-weight: bold;
  z-index: 1;
`;

const StepLabel = styled.span`
  font-size: 0.85rem;
  color: ${props => props.$active ? '#774800' : '#666'};
  text-align: center;
  max-width: 120px;
`;

const FormSection = styled.div`
  margin-bottom: 2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #774800;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #774800;
  }
  
  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

const Option = styled.option`
  padding: 0.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-size: 0.9rem;
`;

const Button = styled.button`
  background: ${props => props.secondary ? 'white' : '#774800'};
  color: ${props => props.secondary ? '#774800' : 'white'};
  border: ${props => props.secondary ? '1px solid #774800' : 'none'};
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  margin: 0 0.5rem;

  &:hover {
    background: ${props => props.secondary ? '#f5f5f5' : '#8b5500'};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const FormField = styled.div`
  margin-bottom: 1.5rem;
`;

const ErrorText = styled.div`
  color: #d32f2f;
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

const FileInput = styled.div`
  margin-top: 1rem;
  
  input {
    display: none;
  }
  
  button {
    padding: 0.5rem 1rem;
    background: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
      background: #eee;
    }
  }
`;

const CalculatorWrapper = styled.div`
  display: ${props => props.display ? 'block' : 'none'};
  // ... other styles
`;

const ReviewSection = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 16px;
  border: 1px solid #e0e0e0;
`;

const ReviewTitle = styled.h3`
  color: #774800;
  margin-bottom: 16px;
  font-size: 1.1rem;
`;

const ReviewItem = styled.div`
  margin-bottom: 8px;
  color: #333;
  font-size: 0.95rem;
`;

const FileUploadWrapper = styled.div`
  margin-top: 12px;
  
  input[type="file"] {
    display: none;
  }
`;

const UploadButton = styled.button`
  background: #f5f5f5;
  border: 1px dashed #ddd;
  padding: 12px 20px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  color: #666;
  transition: all 0.3s ease;

  &:hover {
    background: #eee;
    border-color: #774800;
    color: #774800;
  }
`;

const LanguageSelect = styled.select`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  font-size: 14px;
  color: #666;

  &:focus {
    outline: none;
    border-color: #774800;
  }
`;

const TaxReturnsCalculator = ({ isOpen, onClose }) => {
    return (
      <CalculatorWrapper display={isOpen}>
        {/* Calculator content */}
      </CalculatorWrapper>
    );
  };

const TaxReturnsForm = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [language, setLanguage] = useState('en');
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    personalInfo: {},
    taxClass: {},
    insurance: {},
    deductions: {}
  });

  const t = (key) => {
    const keys = key.split('.');
    return keys.reduce((obj, k) => obj?.[k], translations[language]) || key;
  };

  const validateForm = (step) => {
    const errors = {};
    
    switch(step) {
      case 1:
        if (!formData.personalInfo.firstName) {
          errors.firstName = t('validation.required');
        }
        if (!formData.personalInfo.lastName) {
          errors.lastName = t('validation.required');
        }
        if (!formData.personalInfo.taxId) {
          errors.taxId = t('validation.required');
        } else if (!/^\d{11}$/.test(formData.personalInfo.taxId)) {
          errors.taxId = t('validation.invalidTaxId');
        }
        break;
      
      case 2:
        if (!formData.taxClass.class) {
          errors.taxClass = t('validation.required');
        }
        if (!formData.taxClass.annualIncome) {
          errors.annualIncome = t('validation.required');
        }
        break;
      
      case 3:
        if (!formData.insurance.health) {
          errors.healthInsurance = t('validation.required');
        }
        if (!formData.insurance.pension) {
          errors.pensionInsurance = t('validation.required');
        }
        break;
      
      default:
        break;
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateForm(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const [uploading, setUploading] = useState(false);

  const tax = key => {
    const keys = key.split('.');
    return keys.reduce((obj, k) => obj?.[k], translations[language]) || key;
  };

  const maritalStatusOptions = {
    en: [
      { value: 'single', label: 'Single' },
      { value: 'married', label: 'Married' },
      { value: 'divorced', label: 'Divorced' },
      { value: 'widowed', label: 'Widowed' }
    ],
    de: [
      { value: 'single', label: 'Ledig' },
      { value: 'married', label: 'Verheiratet' },
      { value: 'divorced', label: 'Geschieden' },
      { value: 'widowed', label: 'Verwitwet' }
    ]
  };

  const handleFileUpload = async (file, path) => {
    if (!file) return null;
    const storageRef = ref(storage, `${path}/${file.name}`);
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
  };

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post(`${API_URL}/api/tax-returns`, formData);
//       console.log('Form submitted:', response.data);
//       onClose();
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

  const handleSubmit = async () => {
    try {
      setUploading(true);
      
      // Upload files first
      const fileUploads = await Promise.all([
        formData.personalInfo.identityDocument && 
          handleFileUpload(formData.personalInfo.identityDocument, 'identity'),
        formData.taxClass.incomeStatement && 
          handleFileUpload(formData.taxClass.incomeStatement, 'income'),
        formData.insurance.certificates && 
          handleFileUpload(formData.insurance.certificates, 'insurance'),
        formData.deductions.receipts && 
          handleFileUpload(formData.deductions.receipts, 'deductions')
      ]);

      // Prepare data for Firestore
      const submissionData = {
        ...formData,
        personalInfo: {
          ...formData.personalInfo,
          identityDocumentUrl: fileUploads[0]
        },
        taxClass: {
          ...formData.taxClass,
          incomeStatementUrl: fileUploads[1]
        },
        insurance: {
          ...formData.insurance,
          certificatesUrl: fileUploads[2]
        },
        deductions: {
          ...formData.deductions,
          receiptsUrl: fileUploads[3]
        },
        submittedAt: new Date(),
        language
      };

      // Submit to Firestore
      await addDoc(collection(db, 'taxReturns'), submissionData);
      setUploading(false);
      onClose();
      alert(t('messages.submitSuccess'));
    } catch (error) {
      console.error('Submission error:', error);
      setUploading(false);
      alert(t('messages.submitError'));
    }
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <FormSection>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormField>
                  <Label>{t('fields.firstName')} *</Label>
                  <Input
                    type="text"
                    value={formData.personalInfo.firstName || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      personalInfo: { ...formData.personalInfo, firstName: e.target.value }
                    })}
                  />
                  {formErrors.firstName && <ErrorText>{formErrors.firstName}</ErrorText>}
                </FormField>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <FormField>
                  <Label>{t('fields.lastName')} *</Label>
                  <Input
                    type="text"
                    value={formData.personalInfo.lastName || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      personalInfo: { ...formData.personalInfo, lastName: e.target.value }
                    })}
                  />
                  {formErrors.lastName && <ErrorText>{formErrors.lastName}</ErrorText>}
                </FormField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormField>
                  <Label>{t('fields.dateOfBirth')} *</Label>
                  <Input
                    type="date"
                    value={formData.personalInfo.dateOfBirth || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      personalInfo: { ...formData.personalInfo, dateOfBirth: e.target.value }
                    })}
                  />
                  {formErrors.dateOfBirth && <ErrorText>{formErrors.dateOfBirth}</ErrorText>}
                </FormField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormField>
                  <Label>{t('fields.taxId')} *</Label>
                  <Input
                    type="text"
                    value={formData.personalInfo.taxId || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      personalInfo: { ...formData.personalInfo, taxId: e.target.value }
                    })}
                  />
                  {formErrors.taxId && <ErrorText>{formErrors.taxId}</ErrorText>}
                </FormField>
              </Grid>

              <Grid item xs={12}>
                <h3>Address (Anschrift)</h3>
              </Grid>

              <Grid item xs={12}>
                <FormField>
                  <Label>{t('fields.street')} *</Label>
                  <Input
                    type="text"
                    value={formData.personalInfo.street || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      personalInfo: { ...formData.personalInfo, street: e.target.value }
                    })}
                  />
                  {formErrors.street && <ErrorText>{formErrors.street}</ErrorText>}
                </FormField>
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormField>
                  <Label>{t('fields.houseNumber')} *</Label>
                  <Input
                    type="text"
                    value={formData.personalInfo.houseNumber || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      personalInfo: { ...formData.personalInfo, houseNumber: e.target.value }
                    })}
                  />
                  {formErrors.houseNumber && <ErrorText>{formErrors.houseNumber}</ErrorText>}
                </FormField>
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormField>
                  <Label>{t('fields.postalCode')} *</Label>
                  <Input
                    type="text"
                    value={formData.personalInfo.postalCode || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      personalInfo: { ...formData.personalInfo, postalCode: e.target.value }
                    })}
                  />
                  {formErrors.postalCode && <ErrorText>{formErrors.postalCode}</ErrorText>}
                </FormField>
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormField>
                  <Label>{t('fields.city')} *</Label>
                  <Input
                    type="text"
                    value={formData.personalInfo.city || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      personalInfo: { ...formData.personalInfo, city: e.target.value }
                    })}
                  />
                  {formErrors.city && <ErrorText>{formErrors.city}</ErrorText>}
                </FormField>
              </Grid>

              <Grid item xs={12}>
                <FormGroup>
                  <Label>{t('fields.state')} *</Label>
                  <Select
                    value={formData.personalInfo?.state || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      personalInfo: { ...formData.personalInfo, state: e.target.value }
                    })}
                  >
                    <Option value="">Select State</Option>
                    <Option value="baden-wurttemberg">Baden-Württemberg</Option>
                    <Option value="bavaria">Bavaria (Bayern)</Option>
                    <Option value="berlin">Berlin</Option>
                    <Option value="brandenburg">Brandenburg</Option>
                    <Option value="bremen">Bremen</Option>
                    <Option value="hamburg">Hamburg</Option>
                    <Option value="hesse">Hesse (Hessen)</Option>
                    <Option value="lower-saxony">Lower Saxony (Niedersachsen)</Option>
                    <Option value="mecklenburg-vorpommern">Mecklenburg-Vorpommern</Option>
                    <Option value="north-rhine-westphalia">North Rhine-Westphalia (Nordrhein-Westfalen)</Option>
                    <Option value="rhineland-palatinate">Rhineland-Palatinate (Rheinland-Pfalz)</Option>
                    <Option value="saarland">Saarland</Option>
                    <Option value="saxony">Saxony (Sachsen)</Option>
                    <Option value="saxony-anhalt">Saxony-Anhalt (Sachsen-Anhalt)</Option>
                    <Option value="schleswig-holstein">Schleswig-Holstein</Option>
                    <Option value="thuringia">Thuringia (Thüringen)</Option>
                  </Select>
                  {formErrors.state && <ErrorText>{formErrors.state}</ErrorText>}
                </FormGroup>
              </Grid>

              <Grid item xs={12}>
                <FormField>
                  <Label>{t('fields.maritalStatus')} *</Label>
                  <Select
                    value={formData.personalInfo?.maritalStatus || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      personalInfo: { ...formData.personalInfo, maritalStatus: e.target.value }
                    })}
                  >
                    <option value="">Select Status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </Select>
                  {formErrors.maritalStatus && <ErrorText>{formErrors.maritalStatus}</ErrorText>}
                </FormField>
              </Grid>

              <Grid item xs={12}>
                <FormField>
                  <Label>Identity Document</Label>
                  <FileUploadWrapper>
                    <UploadButton as="label">
                      Upload Identity Document
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          setFormData({
                            ...formData,
                            personalInfo: { ...formData.personalInfo, identityDocument: file }
                          });
                        }}
                      />
                    </UploadButton>
                  </FileUploadWrapper>
                </FormField>
              </Grid>
            </Grid>
          </FormSection>
        );

      case 2:
        return (
          <FormSection>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormGroup>
                  <Label>{t('fields.taxClass')} *</Label>
                  <Select
                    value={formData.taxClass?.class || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      taxClass: { ...formData.taxClass, class: e.target.value }
                    })}
                  >
                    <Option value="">Select Tax Class</Option>
                    <Option value="1">Tax Class 1</Option>
                    <Option value="2">Tax Class 2</Option>
                    <Option value="3">Tax Class 3</Option>
                    <Option value="4">Tax Class 4</Option>
                    <Option value="5">Tax Class 5</Option>
                    <Option value="6">Tax Class 6</Option>
                  </Select>
                  {formErrors.taxClass && <ErrorText>{formErrors.taxClass}</ErrorText>}
                </FormGroup>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormField>
                  <Label>{t('fields.annualIncome')} *</Label>
                  <Input
                    type="number"
                    value={formData.taxClass?.annualIncome || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      taxClass: { ...formData.taxClass, annualIncome: e.target.value }
                    })}
                  />
                  {formErrors.annualIncome && <ErrorText>{formErrors.annualIncome}</ErrorText>}
                </FormField>
              </Grid>

              <Grid item xs={12}>
                <FormField>
                  <Label>Income Statement (Lohnsteuerbescheinigung)</Label>
                  <FileUploadWrapper>
                    <UploadButton as="label">
                      Upload Income Statement
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          setFormData({
                            ...formData,
                            taxClass: { ...formData.taxClass, incomeStatement: file }
                          });
                        }}
                      />
                    </UploadButton>
                  </FileUploadWrapper>
                </FormField>
              </Grid>
            </Grid>
          </FormSection>
        );

      case 3:
        return (
          <FormSection>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormField>
                  <Label>{t('fields.healthInsurance')} *</Label>
                  <Input
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.insurance?.health || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      insurance: { ...formData.insurance, health: e.target.value }
                    })}
                  />
                  {formErrors.healthInsurance && <ErrorText>{formErrors.healthInsurance}</ErrorText>}
                </FormField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormField>
                  <Label>{t('fields.pensionInsurance')} *</Label>
                  <Input
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.insurance?.pension || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      insurance: { ...formData.insurance, pension: e.target.value }
                    })}
                  />
                  {formErrors.pensionInsurance && <ErrorText>{formErrors.pensionInsurance}</ErrorText>}
                </FormField>
              </Grid>

              <Grid item xs={12}>
                <FormField>
                  <Label>Insurance Certificates</Label>
                  <FileUploadWrapper>
                    <UploadButton as="label">
                      Upload Insurance Certificates
                      <input
                        type="file"
                        accept=".pdf"
                        multiple
                        onChange={(e) => {
                          const files = Array.from(e.target.files);
                          setFormData({
                            ...formData,
                            insurance: { ...formData.insurance, certificates: files }
                          });
                        }}
                      />
                    </UploadButton>
                  </FileUploadWrapper>
                </FormField>
              </Grid>
            </Grid>
          </FormSection>
        );

      case 4:
        return (
          <FormSection>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormField>
                  <Label>{t('fields.donations')} *</Label>
                  <Input
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.deductions?.donations || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      deductions: { ...formData.deductions, donations: e.target.value }
                    })}
                  />
                  {formErrors.donations && <ErrorText>{formErrors.donations}</ErrorText>}
                </FormField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormField>
                  <Label>{t('fields.workExpenses')} *</Label>
                  <Input
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.deductions?.workExpenses || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      deductions: { ...formData.deductions, workExpenses: e.target.value }
                    })}
                  />
                  {formErrors.workExpenses && <ErrorText>{formErrors.workExpenses}</ErrorText>}
                </FormField>
              </Grid>

              <Grid item xs={12}>
                <FormField>
                  <Label>Donation Receipts</Label>
                  <FileInput>
                    <input
                      type="file"
                      accept=".pdf"
                      multiple
                      onChange={(e) => {
                        const files = Array.from(e.target.files);
                        setFormData({
                          ...formData,
                          deductions: { ...formData.deductions, donationReceipts: files }
                        });
                      }}
                    />
                  </FileInput>
                </FormField>
              </Grid>

              <Grid item xs={12}>
                <FormField>
                  <Label>Work-Related Expense Receipts</Label>
                  <FileInput>
                    <input
                      type="file"
                      accept=".pdf"
                      multiple
                      onChange={(e) => {
                        const files = Array.from(e.target.files);
                        setFormData({
                          ...formData,
                          deductions: { ...formData.deductions, workExpenseReceipts: files }
                        });
                      }}
                    />
                  </FileInput>
                </FormField>
              </Grid>
            </Grid>
          </FormSection>
        );

      case 5:
        return (
          <FormSection>
            <h2>{t('steps.review')}</h2>
            
            <ReviewSection>
              <ReviewTitle>{t('steps.personal')}</ReviewTitle>
              <ReviewItem>
                {formData.personalInfo.firstName} {formData.personalInfo.lastName}
              </ReviewItem>
              <ReviewItem>
                {formData.personalInfo.street} {formData.personalInfo.houseNumber}, 
                {formData.personalInfo.postalCode} {formData.personalInfo.city}
              </ReviewItem>
              <ReviewItem>Date of Birth: {formData.personalInfo.dateOfBirth}</ReviewItem>
              <ReviewItem>Tax ID: {formData.personalInfo.taxId}</ReviewItem>
              <ReviewItem>Marital Status: {formData.personalInfo.maritalStatus}</ReviewItem>
            </ReviewSection>

            <ReviewSection>
              <ReviewTitle>Tax Classification</ReviewTitle>
              <ReviewItem>Tax Class: {formData.taxClass.class}</ReviewItem>
              <ReviewItem>Annual Income: €{formData.taxClass.annualIncome}</ReviewItem>
            </ReviewSection>

            <ReviewSection>
              <ReviewTitle>Insurance Information</ReviewTitle>
              <ReviewItem>Health Insurance Contributions (€): {formData.insurance.health}</ReviewItem>
              <ReviewItem>Pension Insurance Contributions (€): {formData.insurance.pension}</ReviewItem>
            </ReviewSection>

            <ReviewSection>
              <ReviewTitle>Deductions and Expenses</ReviewTitle>
              <ReviewItem>Donations: €{formData.deductions.donations || '0'}</ReviewItem>
              <ReviewItem>Work Expenses: €{formData.deductions.workExpenses || '0'}</ReviewItem>
            </ReviewSection>
          </FormSection>
        );

      default:
        return null;
    }
  };

  const renderSteps = () => (
    <StepIndicator>
      {['Personal Information', 'Tax Class and Income', 'Insurance Contributions', 'Deductions and Money Sent', 'Additional Forms & Review'].map((step, index) => (
        <StepItem 
          key={index}
          $active={currentStep === index + 1}
          $completed={currentStep > index + 1}
        >
          <StepCircle 
            $active={currentStep === index + 1}
            $completed={currentStep > index + 1}
          >
            {index + 1}
          </StepCircle>
          <StepLabel $active={currentStep === index + 1}>
            {step}
          </StepLabel>
        </StepItem>
      ))}
    </StepIndicator>
  );

  if (!isOpen) return null;

  return (
    <Modal show={isOpen}>
      <FormCard show={isOpen}>
        <Header>
            <LogoSection>
            <Logo src={logo} alt="Leo Naidoo & Partners" />
            <Title>German Tax Return Form</Title>
            </LogoSection>
            
            <LanguageSelect
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                >
                <option value="en">English</option>
                <option value="de">Deutsch</option>
            </LanguageSelect>

            {/* <LanguageButton onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM3.616 11h3.905a19.65 19.65 0 0 1-.184-2H3.064a7.96 7.96 0 0 0 0 2h.552zm.446-4h3.965c.156-1.428.596-2.768 1.274-4H4.062A8.008 8.008 0 0 0 4.062 7zm9.583 13a9.955 9.955 0 0 1-1.842-3H9.721a15.908 15.908 0 0 0 1.528 2.666A7.98 7.98 0 0 0 13.645 20zm1.842-5h2.082c.156-1.428.596-2.768 1.274-4h-3.965a8.008 8.008 0 0 0-.61 4zm-2.082-6h-2.082a19.65 19.65 0 0 1 .184-2h3.905a7.96 7.96 0 0 0 0 2h-.552z"/>
            </svg>
            {language === 'en' ? 'English' : 'Deutsch'}
            </LanguageButton> */}
        </Header>
        <X 
          style={{ position: 'absolute', right: '1rem', top: '1rem', cursor: 'pointer' }}
          onClick={onClose}
        />
        
        {/* <LanguageSelect
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="de">Deutsch</option>
        </LanguageSelect> */}

        <h2>{t('steps.personal')}</h2>
        
        {renderSteps()}

        {renderStep()}

        <ButtonGroup>
          {currentStep > 1 && (
            <Button secondary onClick={handlePrevious}>
              {t('buttons.back')}
            </Button>
          )}
          {currentStep < 5 ? (
            <Button onClick={handleNext}>
              {t('buttons.next')}
            </Button>
          ) : (
            <Button onClick={handleSubmit}>
              {t('buttons.submit')}
            </Button>
          )}
        </ButtonGroup>
      </FormCard>
    </Modal>
  );
};

export default TaxReturnsForm; 