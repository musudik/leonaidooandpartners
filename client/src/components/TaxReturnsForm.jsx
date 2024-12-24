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
`;

const Step = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${props => props.active ? '#774800' : '#e0e0e0'};
  color: ${props => props.active ? 'white' : '#666'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
  font-weight: bold;
`;

const FormSection = styled.div`
  margin-bottom: 2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
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

const Label = styled.label`
  display: block;
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
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
    "Tax Class & Income",
    "Insurance",
    "Deductions & Review"
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
                <FormField>
                  <Label>State (Bundesland)</Label>
                  <Select
                    value={formData.personalInfo?.state || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      personalInfo: { ...formData.personalInfo, state: e.target.value }
                    })}
                  >
                    <option value="">Select State</option>
                    <option value="baden-wurttemberg">Baden-Württemberg</option>
                    <option value="bavaria">Bavaria (Bayern)</option>
                    {/* Add other German states */}
                  </Select>
                </FormField>
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
                  <Label>Identity Document (Ausweisdokument)</Label>
                  <FileInput>
                    <input
                      type="file"
                      id="identity-document"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        setFormData({
                          ...formData,
                          personalInfo: { ...formData.personalInfo, identityDocument: file }
                        });
                      }}
                    />
                    <button onClick={() => document.getElementById('identity-document').click()}>
                      Choose File
                    </button>
                    <span style={{ marginLeft: '1rem' }}>
                      {formData.personalInfo?.identityDocument?.name || 'No file chosen'}
                    </span>
                  </FileInput>
                </FormField>
              </Grid>
            </Grid>
          </FormSection>
        );
      // Add cases for other steps
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <Modal show={isOpen}>
      <FormCard show={isOpen}>
        <X 
          style={{ position: 'absolute', right: '1rem', top: '1rem', cursor: 'pointer' }}
          onClick={onClose}
        />
        
        <h2>Tax Returns Form</h2>
        
        <StepIndicator>
          {steps.map((step, index) => (
            <Step key={index} active={currentStep === index + 1}>
              {index + 1}
            </Step>
          ))}
        </StepIndicator>

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