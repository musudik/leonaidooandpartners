/* import React, { useState } from 'react';
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

// Reuse styled components from TaxReturnsForm
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

// Reuse other styled components...

const SelfDisclosureForm = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [language, setLanguage] = useState('en');
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    propertyInfo: {},
    ownershipDetails: {},
    financialInfo: {},
    legalInfo: {}
  });

  const t = (key) => {
    const keys = key.split('.');
    return keys.reduce((obj, k) => obj?.[k], translations[language]) || key;
  };

  const validateForm = (step) => {
    const errors = {};
    
    switch(step) {
      case 1:
        if (!formData.propertyInfo.address) {
          errors.address = t('validation.required');
        }
        if (!formData.propertyInfo.propertyType) {
          errors.propertyType = t('validation.required');
        }
        break;
      
      case 2:
        if (!formData.ownershipDetails.ownerCount) {
          errors.ownerCount = t('validation.required');
        }
        break;
      
      case 3:
        if (!formData.financialInfo.purchasePrice) {
          errors.purchasePrice = t('validation.required');
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

  const handleFileUpload = async (file, path) => {
    if (!file) return null;
    const storageRef = ref(storage, `${path}/${file.name}`);
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
  };

  const handleSubmit = async () => {
    try {
      setUploading(true);
      
      const fileUploads = await Promise.all([
        formData.propertyInfo.deed && 
          handleFileUpload(formData.propertyInfo.deed, 'deeds'),
        formData.financialInfo.bankStatements && 
          handleFileUpload(formData.financialInfo.bankStatements, 'statements')
      ]);

      const submissionData = {
        ...formData,
        propertyInfo: {
          ...formData.propertyInfo,
          deedUrl: fileUploads[0]
        },
        financialInfo: {
          ...formData.financialInfo,
          bankStatementsUrl: fileUploads[1]
        },
        submittedAt: new Date(),
        language
      };

      await addDoc(collection(db, 'selfDisclosures'), submissionData);
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
              <Grid item xs={12}>
                <FormField>
                  <Label>{t('fields.propertyAddress')} *</Label>
                  <Input
                    type="text"
                    value={formData.propertyInfo.address || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      propertyInfo: { ...formData.propertyInfo, address: e.target.value }
                    })}
                  />
                  {formErrors.address && <ErrorText>{formErrors.address}</ErrorText>}
                </FormField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormField>
                  <Label>{t('fields.propertyType')} *</Label>
                  <Select
                    value={formData.propertyInfo.propertyType || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      propertyInfo: { ...formData.propertyInfo, propertyType: e.target.value }
                    })}
                  >
                    <Option value="">{t('fields.selectPropertyType')}</Option>
                    <Option value="single_family">{t('fields.singleFamily')}</Option>
                    <Option value="multi_family">{t('fields.multiFamily')}</Option>
                    <Option value="condo">{t('fields.condo')}</Option>
                    <Option value="commercial">{t('fields.commercial')}</Option>
                  </Select>
                  {formErrors.propertyType && <ErrorText>{formErrors.propertyType}</ErrorText>}
                </FormField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormField>
                  <Label>{t('fields.yearBuilt')}</Label>
                  <Input
                    type="number"
                    value={formData.propertyInfo.yearBuilt || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      propertyInfo: { ...formData.propertyInfo, yearBuilt: e.target.value }
                    })}
                  />
                </FormField>
              </Grid>

              <Grid item xs={12}>
                <FormField>
                  <Label>{t('fields.propertyDeed')}</Label>
                  <FileUploadWrapper>
                    <UploadButton as="label">
                      {t('buttons.uploadDeed')}
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          setFormData({
                            ...formData,
                            propertyInfo: { ...formData.propertyInfo, deed: file }
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
                <FormField>
                  <Label>{t('fields.ownerCount')} *</Label>
                  <Input
                    type="number"
                    value={formData.ownershipDetails.ownerCount || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      ownershipDetails: { ...formData.ownershipDetails, ownerCount: e.target.value }
                    })}
                  />
                  {formErrors.ownerCount && <ErrorText>{formErrors.ownerCount}</ErrorText>}
                </FormField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormField>
                  <Label>{t('fields.ownershipType')}</Label>
                  <Select
                    value={formData.ownershipDetails.ownershipType || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      ownershipDetails: { ...formData.ownershipDetails, ownershipType: e.target.value }
                    })}
                  >
                    <Option value="">{t('fields.selectOwnershipType')}</Option>
                    <Option value="sole">{t('fields.soleOwnership')}</Option>
                    <Option value="joint">{t('fields.jointOwnership')}</Option>
                    <Option value="community">{t('fields.communityProperty')}</Option>
                  </Select>
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
                  <Label>{t('fields.purchasePrice')} *</Label>
                  <Input
                    type="number"
                    step="0.01"
                    value={formData.financialInfo.purchasePrice || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      financialInfo: { ...formData.financialInfo, purchasePrice: e.target.value }
                    })}
                  />
                  {formErrors.purchasePrice && <ErrorText>{formErrors.purchasePrice}</ErrorText>}
                </FormField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormField>
                  <Label>{t('fields.currentValue')}</Label>
                  <Input
                    type="number"
                    step="0.01"
                    value={formData.financialInfo.currentValue || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      financialInfo: { ...formData.financialInfo, currentValue: e.target.value }
                    })}
                  />
                </FormField>
              </Grid>

              <Grid item xs={12}>
                <FormField>
                  <Label>{t('fields.bankStatements')}</Label>
                  <FileUploadWrapper>
                    <UploadButton as="label">
                      {t('buttons.uploadStatements')}
                      <input
                        type="file"
                        accept=".pdf"
                        multiple
                        onChange={(e) => {
                          const files = Array.from(e.target.files);
                          setFormData({
                            ...formData,
                            financialInfo: { ...formData.financialInfo, bankStatements: files }
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
              <Grid item xs={12}>
                <FormField>
                  <Label>{t('fields.legalIssues')}</Label>
                  <Select
                    value={formData.legalInfo.hasLegalIssues || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      legalInfo: { ...formData.legalInfo, hasLegalIssues: e.target.value }
                    })}
                  >
                    <Option value="">{t('fields.selectOption')}</Option>
                    <Option value="yes">{t('fields.yes')}</Option>
                    <Option value="no">{t('fields.no')}</Option>
                  </Select>
                </FormField>
              </Grid>

              {formData.legalInfo.hasLegalIssues === 'yes' && (
                <Grid item xs={12}>
                  <FormField>
                    <Label>{t('fields.legalDetails')}</Label>
                    <TextArea
                      value={formData.legalInfo.legalDetails || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        legalInfo: { ...formData.legalInfo, legalDetails: e.target.value }
                      })}
                    />
                  </FormField>
                </Grid>
              )}
            </Grid>
          </FormSection>
        );

      case 5:
        return (
          <FormSection>
            <h2>{t('steps.review')}</h2>
            
            <ReviewSection>
              <ReviewTitle>{t('steps.propertyInfo')}</ReviewTitle>
              <ReviewItem>{formData.propertyInfo.address}</ReviewItem>
              <ReviewItem>{formData.propertyInfo.propertyType}</ReviewItem>
              <ReviewItem>{formData.propertyInfo.yearBuilt}</ReviewItem>
            </ReviewSection>

            <ReviewSection>
              <ReviewTitle>{t('steps.ownership')}</ReviewTitle>
              <ReviewItem>{formData.ownershipDetails.ownerCount} {t('fields.owners')}</ReviewItem>
              <ReviewItem>{formData.ownershipDetails.ownershipType}</ReviewItem>
            </ReviewSection>

            <ReviewSection>
              <ReviewTitle>{t('steps.financial')}</ReviewTitle>
              <ReviewItem>{t('fields.purchasePrice')}: €{formData.financialInfo.purchasePrice}</ReviewItem>
              <ReviewItem>{t('fields.currentValue')}: €{formData.financialInfo.currentValue}</ReviewItem>
            </ReviewSection>

            <ReviewSection>
              <ReviewTitle>{t('steps.legal')}</ReviewTitle>
              <ReviewItem>{t('fields.legalIssues')}: {formData.legalInfo.hasLegalIssues}</ReviewItem>
              {formData.legalInfo.legalDetails && (
                <ReviewItem>{formData.legalInfo.legalDetails}</ReviewItem>
              )}
            </ReviewSection>
          </FormSection>
        );

      default:
        return null;
    }
  };

  const renderSteps = () => (
    <StepIndicator>
      {['Property Information', 'Ownership Details', 'Financial Information', 'Legal Information', 'Review'].map((step, index) => (
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
            <Title>{t('forms.selfDisclosure')}</Title>
          </LogoSection>
          
          <LanguageSelect
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="de">Deutsch</option>
          </LanguageSelect>
        </Header>
        
        <X 
          style={{ position: 'absolute', right: '1rem', top: '1rem', cursor: 'pointer' }}
          onClick={onClose}
        />

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

export default SelfDisclosureForm;
 */