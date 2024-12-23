import React, { useState } from 'react';
import styled from 'styled-components';
import { X } from 'lucide-react';
import axios from 'axios';

const API_URL = 'https://iquiz-server.replit.app';

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
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease-in-out;
`;

const FormCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  width: 90%;
  max-width: 500px;
  position: relative;
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-20px)'};
  transition: transform 0.3s ease-in-out;
  max-height: 90vh;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #774800;
  padding: 0.5rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: rotate(90deg);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #774800;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #774800;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #774800;
  }
`;

const SubmitButton = styled.button`
  background: #774800;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;

  &:hover {
    background: #8b5500;
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const SuccessMessage = styled.div`
  color: #28a745;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  text-align: center;
`;

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    description: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    { value: 'pension', label: 'Pension & Retirement Planning' },
    { value: 'tax', label: 'Tax Services' },
    { value: 'loans', label: 'Loans' },
    { value: 'insurance', label: 'Insurance Solutions' },
    { value: 'energy', label: 'Energy Savings' },
    { value: 'wealth', label: 'Wealth Building' },
    { value: 'banking', label: 'Banking Services' },
    { value: 'sponsorship', label: 'Sponsorship Inquiry' },
    { value: 'other', label: 'Other Query' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsSubmitting(true);

    // Basic validation
    if (!formData.email || !formData.phone) {
      setError('Email and phone number are required');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/api/send-email`, {
        to: formData.email,
        name: formData.name,
        phone: formData.phone,
        service: formData.service,
        description: formData.description,
        emailType: "contact-form",
      });

      console.log("Email sent:", response.data);
      setSuccess('Your query has been submitted successfully. We will contact you soon.');
      setTimeout(() => {
        onClose();
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          description: ''
        });
      }, 3000);
    } catch (error) {
      console.error("Failed to send email:", error.response?.data || error);
      setError('Failed to submit your query. Please try again later.');
    }

    setIsSubmitting(false);
  };

  return (
    <Modal isOpen={isOpen} onClick={onClose}>
      <FormCard isOpen={isOpen} onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <X size={24} />
        </CloseButton>

        <h2 className="text-2xl font-bold text-[#774800] mb-4">Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Your name"
            />
          </FormGroup>

          <FormGroup>
            <Label>Email *</Label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="Your email"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Phone Number *</Label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="Your phone number"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Service</Label>
            <Select
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
            >
              <option value="">Select a service</option>
              {services.map(service => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Description</Label>
            <TextArea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder="Please describe your query"
            />
          </FormGroup>

          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Query'}
          </SubmitButton>
        </form>
      </FormCard>
    </Modal>
  );
};

export default ContactForm; 