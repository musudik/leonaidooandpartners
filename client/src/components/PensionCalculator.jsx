// Pension Calculator React App
import React, { useState } from 'react';
import { X } from 'lucide-react';
import styled from 'styled-components';

const CalculatorOverlay = styled.div`
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

const CalculatorCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  width: 90%;
  max-width: 500px;
  position: relative;
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-20px)'};
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
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

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #774800;
  }
`;

const CalculateButton = styled.button`
  background: #774800;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  margin-top: 1rem;
  transition: background-color 0.2s ease;

  &:hover {
    background: #8b5500;
  }
`;

const Result = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background: ${props => props.isVisible ? '#f9f5f0' : 'transparent'};
  border-radius: 8px;
  text-align: center;
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(10px)'};
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: all 0.3s ease-in-out;

  h2 {
    color: #774800;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }
`;

const Label = styled.label`
  display: block;
  margin-top: 1rem;
  color: #555;
  font-weight: 500;
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
`;

const ClearButton = styled(CalculateButton)`
  background: #fff;
  color: #774800;
  border: 2px solid #774800;

  &:hover {
    background: #f9f5f0;
  }
`;

const PensionCalculator = ({ isOpen, onClose }) => {
    const [age, setAge] = useState('');
    const [monthlySavings, setMonthlySavings] = useState('');
    const [currentSavings, setCurrentSavings] = useState('');
    const [monthlyPension, setMonthlyPension] = useState(null);
    const [showResult, setShowResult] = useState(false);

    const clearForm = () => {
        setAge('');
        setMonthlySavings('');
        setCurrentSavings('');
        setMonthlyPension(null);
        setShowResult(false);
    };

    const handleClose = () => {
        clearForm();
        onClose();
    };

    const calculatePension = () => {
        const retirementAge = 67;
        const yearsToRetirement = retirementAge - age;

        if (yearsToRetirement <= 0) {
            setMonthlyPension('You are already at retirement age or beyond.');
            setShowResult(true);
            return;
        }

        const annualInterestRate = 0.02;
        const futureMonthlySavings = 
            monthlySavings * ((Math.pow(1 + annualInterestRate / 12, yearsToRetirement * 12) - 1) / (annualInterestRate / 12));
        const projectedSavings = currentSavings * Math.pow(1 + annualInterestRate, yearsToRetirement) + futureMonthlySavings;
        const retirementSpan = 20;
        const annualPension = projectedSavings / retirementSpan;
        const monthlyPensionValue = annualPension / 12;

        setMonthlyPension(monthlyPensionValue.toFixed(2));
        setShowResult(true);
    };

    return (
        <CalculatorOverlay isOpen={isOpen} onClick={handleClose}>
            <CalculatorCard isOpen={isOpen} onClick={e => e.stopPropagation()}>
                <CloseButton onClick={handleClose}>
                    <X size={24} />
                </CloseButton>
                <h1 className="text-2xl font-bold text-[#774800] mb-4">Pension Calculator</h1>
                
                <Label>Current Age</Label>
                <Input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Enter your current age"
                />

                <Label>Monthly Savings (€)</Label>
                <Input
                    type="number"
                    value={monthlySavings}
                    onChange={(e) => setMonthlySavings(e.target.value)}
                    placeholder="Enter monthly savings"
                />

                <Label>Current Savings (€)</Label>
                <Input
                    type="number"
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(e.target.value)}
                    placeholder="Enter current savings"
                />

                <ButtonGroup>
                    <ClearButton onClick={clearForm}>
                        Clear Form
                    </ClearButton>
                    <CalculateButton onClick={calculatePension}>
                        Calculate Pension
                    </CalculateButton>
                </ButtonGroup>

                <Result isVisible={showResult}>
                    <h2>Estimated Monthly Pension</h2>
                    <p>{isNaN(monthlyPension) ? monthlyPension : `€${monthlyPension}`}</p>
                </Result>
            </CalculatorCard>
        </CalculatorOverlay>
    );
};

export default PensionCalculator;