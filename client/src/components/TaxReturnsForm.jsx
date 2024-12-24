import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { X } from 'lucide-react';
import axios from 'axios';
import { Grid } from '@mui/material';

const API_URL = import.meta.env.VITE_API_URL;

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

const TaxReturnsCalculator = ({ isOpen, onClose }) => {
    return (
      <CalculatorWrapper display={isOpen}>
        {/* Calculator content */}
      </CalculatorWrapper>
    );
  };

const TaxReturnsForm = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {},
    taxClass: {},
    insurance: {},
    deductions: {}
  });

  const steps = [
    "Personal Information",
    "Tax Class and Income",
    "Insurance Contributions",
    "Deductions and Money Sent",
    "Additional Forms & Review"
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/tax-returns`, formData);
      console.log('Form submitted:', response.data);
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
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
                  <Label>First Name *</Label>
                  <Input
                    type="text"
                    placeholder="First Name"
                    required
                    onChange={(e) => setFormData({
                      ...formData,
                      personalInfo: { ...formData.personalInfo, firstName: e.target.value }
                    })}
                  />
                  <ErrorText>Dieses Feld ist erforderlich</ErrorText>
                </FormField>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <FormField>
                  <Label>Last Name *</Label>
                  <Input
                    type="text"
                    placeholder="Last Name"
                    required
                    onChange={(e) => setFormData({
                      ...formData,
                      personalInfo: { ...formData.personalInfo, lastName: e.target.value }
                    })}
                  />
                  <ErrorText>Dieses Feld ist erforderlich</ErrorText>
                </FormField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormField>
                  <Label>Date of Birth *</Label>
                  <Input
                    type="date"
                    placeholder="mm/dd/yyyy"
                    required
                    onChange={(e) => setFormData({
                      ...formData,
                      personalInfo: { ...formData.personalInfo, dateOfBirth: e.target.value }
                    })}
                  />
                  <ErrorText>Dieses Feld ist erforderlich</ErrorText>
                </FormField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormField>
                  <Label>Tax ID *</Label>
                  <Input
                    type="text"
                    placeholder="Tax ID"
                    required
                    onChange={(e) => setFormData({
                      ...formData,
                      personalInfo: { ...formData.personalInfo, taxId: e.target.value }
                    })}
                  />
                  <ErrorText>Dieses Feld ist erforderlich</ErrorText>
                </FormField>
              </Grid>

              <Grid item xs={12}>
                <h3>Address (Anschrift)</h3>
              </Grid>

              <Grid item xs={12}>
                <FormField>
                  <Label>Street *</Label>
                  <Input
                    type="text"
                    placeholder="Street"
                    required
                    onChange={(e) => setFormData({
                      ...formData,
                      personalInfo: { ...formData.personalInfo, street: e.target.value }
                    })}
                  />
                  <ErrorText>Dieses Feld ist erforderlich</ErrorText>
                </FormField>
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormField>
                  <Label>House Number *</Label>
                  <Input
                    type="text"
                    placeholder="House Number"
                    required
                    onChange={(e) => setFormData({
                      ...formData,
                      personalInfo: { ...formData.personalInfo, houseNumber: e.target.value }
                    })}
                  />
                  <ErrorText>Dieses Feld ist erforderlich</ErrorText>
                </FormField>
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormField>
                  <Label>Postal Code *</Label>
                  <Input
                    type="text"
                    placeholder="Postal Code"
                    required
                    onChange={(e) => setFormData({
                      ...formData,
                      personalInfo: { ...formData.personalInfo, postalCode: e.target.value }
                    })}
                  />
                  <ErrorText>Dieses Feld ist erforderlich</ErrorText>
                </FormField>
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormField>
                  <Label>City (Stadt) *</Label>
                  <Input
                    type="text"
                    placeholder="City"
                    required
                    onChange={(e) => setFormData({
                      ...formData,
                      personalInfo: { ...formData.personalInfo, city: e.target.value }
                    })}
                  />
                  <ErrorText>Dieses Feld ist erforderlich</ErrorText>
                </FormField>
              </Grid>

              <Grid item xs={12}>
                <FormGroup>
                  <Label>State (Bundesland)</Label>
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
                </FormGroup>
              </Grid>

              <Grid item xs={12}>
                <FormField>
                  <Label>Marital Status</Label>
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
                  <ErrorText>Dieses Feld ist erforderlich</ErrorText>
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
                  <Label>Tax Class</Label>
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
                </FormGroup>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormField>
                  <Label>Annual Income</Label>
                  <Input
                    type="number"
                    placeholder="Annual Income"
                    value={formData.taxClass?.annualIncome || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      taxClass: { ...formData.taxClass, annualIncome: e.target.value }
                    })}
                  />
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
                  <Label>Health Insurance</Label>
                  <Input
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="Health Insurance Amount"
                    value={formData.insurance?.health || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      insurance: { ...formData.insurance, health: e.target.value }
                    })}
                  />
                </FormField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormField>
                  <Label>Pension Insurance</Label>
                  <Input
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="Pension Insurance Amount"
                    value={formData.insurance?.pension || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      insurance: { ...formData.insurance, pension: e.target.value }
                    })}
                  />
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
                  <Label>Charitable Donations</Label>
                  <Input
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="Donation Amount"
                    value={formData.deductions?.donations || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      deductions: { ...formData.deductions, donations: e.target.value }
                    })}
                  />
                </FormField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormField>
                  <Label>Work-Related Expenses</Label>
                  <Input
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="Work Expenses Amount"
                    value={formData.deductions?.workExpenses || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      deductions: { ...formData.deductions, workExpenses: e.target.value }
                    })}
                  />
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
            <h2>Final Review</h2>
            
            <ReviewSection>
              <ReviewTitle>Personal Information</ReviewTitle>
              <ReviewItem>{formData.personalInfo.firstName} {formData.personalInfo.lastName}</ReviewItem>
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
      {steps.map((step, index) => (
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
        <X 
          style={{ position: 'absolute', right: '1rem', top: '1rem', cursor: 'pointer' }}
          onClick={onClose}
        />
        
        <h2>Tax Returns Form</h2>
        
        {renderSteps()}

        {renderStep()}

        <ButtonGroup>
          {currentStep > 1 && (
            <Button secondary onClick={handlePrevious}>
              Previous
            </Button>
          )}
          {currentStep < steps.length ? (
            <Button onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </ButtonGroup>
      </FormCard>
    </Modal>
  );
};

export default TaxReturnsForm; 