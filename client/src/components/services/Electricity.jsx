import React, { useState } from 'react';
import styled from 'styled-components';
import { X } from 'lucide-react';
import Electricity_Image from '../../assets/ElectricitySavings.jpg'; // You'll need to add this image
import WhatsAppButton from '../common/WhatsAppButton';

// Styled components
const PageWrapper = styled.div`
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Button = styled.button`
  background: #774800;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background: #8b5500;
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
    <PageWrapper>
      <ContentWrapper>
        <div className="bg-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Header Section */}
            <div className="mt-16">
              <h1 className="text-6xl font-black mb-4">
                <span className="text-[#774800]">Big Savings</span>
                <span className="text-[#74767a] ml-2">on Strom & Gas</span>
              </h1>
              <h2 className="text-2xl text-gray-600 mb-8">Pay Less for the Same Brightness!</h2>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                <div>
                  <p className="text-gray-600 mb-6">
                    Why pay more when you can pay less for the same energy? Your light won't shine any brighter just because your bill is higher—so why overpay for Strom and Gas?
                  </p>
                  <p className="text-gray-600">
                    At Leonaidoo and Partners, we help you secure the best energy deals so you can save hundreds of euros every year without changing your lifestyle.
                  </p>
                </div>

                {/* Benefits Section */}
                <div className="space-y-6">
                  <ul className="list-none space-y-4">
                    <li className="flex items-start">
                      <span className="text-[#774800] mr-2 font-bold">✅</span>
                      <span>Lower electricity & gas bills</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#774800] mr-2 font-bold">✅</span>
                      <span>Same reliable energy supply</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#774800] mr-2 font-bold">✅</span>
                      <span>Hassle-free switching process</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#774800] mr-2 font-bold">✅</span>
                      <span>More money in your pocket</span>
                    </li>
                  </ul>
                  <div className="space-y-6 mt-8">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-[#774800] mb-3">Don't Let High Energy Costs Dim Your Financial Future</h3>
                    <p className="text-gray-600 mb-4">
                      Switch today and start saving! Contact us now to find the best rates for your home or business.
                    </p>
                    <p className="text-gray-600 font-medium">
                      Our experts will analyze your current usage and find you the most competitive rates available, saving you time and money.
                    </p>
                  </div>
                </div>
                </div>

                <div className="mt-8">
                  <Button onClick={() => setShowForm(true)}>
                    Submit Your Bill for Comparison
                  </Button>
                </div>
              </div>

              {/* Right Column - Image and Additional Info */}
              <div className="space-y-8">
                <div className="relative">
                  <img 
                    src={Electricity_Image}
                    alt="Energy Savings"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c17f59] rounded-full z-10"></div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
      
      <ElectricityForm isOpen={showForm} onClose={() => setShowForm(false)} />
      <WhatsAppButton phoneNumber="4917647757767" />
    </PageWrapper>
  );
};

export default Electricity;
