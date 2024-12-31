import React, { useState } from 'react';
import styled from 'styled-components';
import { X } from 'lucide-react';

// Styled components
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
  max-width: 600px;
  position: relative;
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

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-size: 0.9rem;
`;

const Button = styled.button`
  background: #774800;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  margin: 0 0.5rem;

  &:hover {
    background: #8b5500;
  }
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

const ElectricityForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    electricityBill: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    onClose();
  };

  return (
    <Modal show={isOpen}>
      <FormCard>
        <X 
          style={{ position: 'absolute', right: '1rem', top: '1rem', cursor: 'pointer' }}
          onClick={onClose}
        />
        <h2 className="text-2xl font-bold mb-4 text-[#774800]">Electricity Bill Submission</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label>First Name</Label>
              <Input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                required
              />
            </div>
            
            <div>
              <Label>Last Name</Label>
              <Input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                required
              />
            </div>
            
            <div>
              <Label>Address</Label>
              <Input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                required
              />
            </div>
            
            <div>
              <Label>Upload Electricity Bill</Label>
              <FileUploadWrapper>
                <UploadButton as="label">
                  {formData.electricityBill ? formData.electricityBill.name : 'Choose File'}
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => setFormData({...formData, electricityBill: e.target.files[0]})}
                    required
                  />
                </UploadButton>
              </FileUploadWrapper>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </FormCard>
    </Modal>
  );
};

const Electricity = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="mt-16">
          <h1 className="text-6xl font-black mb-4">
            <span className="text-[#774800]">Electricity</span>
            <span className="text-[#74767a] ml-2">Savings</span>
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-3">Description</h2>
              <p className="text-gray-600">
                We help you find the best electricity savings for your needs.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="mt-4 bg-[#774800] text-white px-6 py-2 rounded-md hover:bg-[#8b5500] transition-colors"
              >
                Submit Electricity Bill
              </button>
            </div>
          </div>
        </div>
        
        <ElectricityForm isOpen={showForm} onClose={() => setShowForm(false)} />
      </div>
    </div>
  );
};

export default Electricity;
