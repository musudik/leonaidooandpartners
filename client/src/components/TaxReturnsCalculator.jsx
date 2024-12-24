// Tax Returns Calculator React App
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { X } from 'lucide-react';

const overlayStyles = css`
  visibility: ${({ $visible }) => $visible ? 'visible' : 'hidden'};
  opacity: ${({ $visible }) => $visible ? 1 : 0};
`;

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
  transition: visibility 0.3s, opacity 0.3s;
  ${overlayStyles}
`;

const CalculatorCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  width: 90%;
  max-width: 600px;
  position: relative;
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
  
  &:hover {
    color: #8b5500;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
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
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  
  &:focus {
    outline: none;
    border-color: #774800;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const RadioInput = styled.input`
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  background: ${props => props.$variant === 'outline' ? 'white' : '#774800'};
  color: ${props => props.$variant === 'outline' ? '#774800' : 'white'};
  border: ${props => props.$variant === 'outline' ? '1px solid #774800' : 'none'};
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    background: ${props => props.$variant === 'outline' ? '#f5f5f5' : '#8b5500'};
  }
`;

const Result = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 8px;
  transition: visibility 0.3s, opacity 0.3s;
  ${overlayStyles}
  
  h2 {
    color: #774800;
    margin-bottom: 0.5rem;
  }
`;

const TaxReturnsCalculator = ({ isOpen, onClose }) => {
    const [year, setYear] = useState('2023');
    const [isMarried, setIsMarried] = useState(false);
    const [taxpayerIncome, setTaxpayerIncome] = useState('');
    const [spouseIncome, setSpouseIncome] = useState('');
    const [travelAllowance, setTravelAllowance] = useState('');
    const [spouseTravelAllowance, setSpouseTravelAllowance] = useState('');
    const [churchTax, setChurchTax] = useState(false);
    const [state, setState] = useState('Bayern');
    const [children, setChildren] = useState(0);
    const [childcareCosts, setChildcareCosts] = useState('');
    const [householdServices, setHouseholdServices] = useState('');
    const [craftsmenServices, setCraftsmenServices] = useState('');
    const [donations, setDonations] = useState('');
    const [refund, setRefund] = useState(null);

    const calculateRefund = () => {
        // Placeholder tax calculation logic, this needs to be replaced with actual formulas for German tax law.
        const baseRate = 0.25; // Example base rate

        // Calculate total taxable income
        const totalIncome = parseFloat(taxpayerIncome || 0) + (isMarried ? parseFloat(spouseIncome || 0) : 0);
        const totalTravelAllowance = parseFloat(travelAllowance || 0) + (isMarried ? parseFloat(spouseTravelAllowance || 0) : 0);

        // Deductions
        const totalDeductions = totalTravelAllowance * 0.30 + // Travel allowance deduction
            parseFloat(childcareCosts || 0) +
            parseFloat(householdServices || 0) +
            parseFloat(craftsmenServices || 0) +
            parseFloat(donations || 0);

        // Estimated tax liability
        const taxableIncome = totalIncome - totalDeductions;
        const estimatedTax = taxableIncome * baseRate;

        // Church tax (if applicable)
        const churchTaxAmount = churchTax ? estimatedTax * 0.08 : 0;
        const finalTax = estimatedTax + churchTaxAmount;

        // Placeholder for refund calculation
        setRefund(finalTax.toFixed(2));
    };

    const clearForm = () => {
        setIsMarried(false);
        setTaxpayerIncome('');
        setSpouseIncome('');
        setTravelAllowance('');
        setSpouseTravelAllowance('');
        setChurchTax(false);
        setState('Bayern');
        setChildren(0);
        setChildcareCosts('');
        setHouseholdServices('');
        setCraftsmenServices('');
        setDonations('');
        setRefund(null);
    };

    const handleClose = () => {
        clearForm();
        onClose();
    };

    return (
        <CalculatorOverlay $visible={isOpen} onClick={onClose}>
            <CalculatorCard onClick={e => e.stopPropagation()}>
                <CloseButton onClick={handleClose}>
                    <X size={24} />
                </CloseButton>
                <h1 className="text-2xl font-bold text-[#774800] mb-4">Tax Returns Calculator</h1>

                <FormGroup>
                    <Label>Are you married?</Label>
                    <RadioGroup>
                        <RadioLabel>
                            <RadioInput
                                type="radio"
                                name="maritalStatus"
                                checked={isMarried === true}
                                onChange={() => setIsMarried(true)}
                            />
                            Yes
                        </RadioLabel>
                        <RadioLabel>
                            <RadioInput
                                type="radio"
                                name="maritalStatus"
                                checked={isMarried === false}
                                onChange={() => setIsMarried(false)}
                            />
                            No
                        </RadioLabel>
                    </RadioGroup>
                </FormGroup>

                <FormGroup>
                    <Label>Gross annual wage (Taxpayer)</Label>
                    <Input
                        type="number"
                        value={taxpayerIncome}
                        onChange={(e) => setTaxpayerIncome(e.target.value)}
                    />
                </FormGroup>

                {isMarried && (
                    <FormGroup>
                        <Label>Gross annual wage (Spouse)</Label>
                        <Input
                            type="number"
                            value={spouseIncome}
                            onChange={(e) => setSpouseIncome(e.target.value)}
                        />
                    </FormGroup>
                )}

                <FormGroup>
                    <Label>Travel allowance (km)</Label>
                    <Input
                        type="number"
                        value={travelAllowance}
                        onChange={(e) => setTravelAllowance(e.target.value)}
                    />
                </FormGroup>

                {isMarried && (
                    <FormGroup>
                        <Label>Travel allowance (Spouse) (km)</Label>
                        <Input
                            type="number"
                            value={spouseTravelAllowance}
                            onChange={(e) => setSpouseTravelAllowance(e.target.value)}
                        />
                    </FormGroup>
                )}

                <FormGroup>
                    <Label>Church tax liability</Label>
                    <RadioGroup>
                        <RadioLabel>
                            <RadioInput
                                type="radio"
                                name="churchTax"
                                checked={churchTax === true}
                                onChange={() => setChurchTax(true)}
                            />
                            Yes
                        </RadioLabel>
                        <RadioLabel>
                            <RadioInput
                                type="radio"
                                name="churchTax"
                                checked={churchTax === false}
                                onChange={() => setChurchTax(false)}
                            />
                            No
                        </RadioLabel>
                    </RadioGroup>
                </FormGroup>

                <FormGroup>
                    <Label>Federal state</Label>
                    <Select
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    >
                        <option value="Bayern">Bayern</option>
                        <option value="Berlin">Berlin</option>
                        <option value="Hamburg">Hamburg</option>
                        {/* Add other states as needed */}
                    </Select>
                </FormGroup>

                <FormGroup>
                    <Label>Number of children</Label>
                    <Input
                        type="number"
                        value={children}
                        onChange={(e) => setChildren(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Childcare costs (€)</Label>
                    <Input
                        type="number"
                        value={childcareCosts}
                        onChange={(e) => setChildcareCosts(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Household services (€)</Label>
                    <Input
                        type="number"
                        value={householdServices}
                        onChange={(e) => setHouseholdServices(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Craftsmen's services (€)</Label>
                    <Input
                        type="number"
                        value={craftsmenServices}
                        onChange={(e) => setCraftsmenServices(e.target.value)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Donations (€)</Label>
                    <Input
                        type="number"
                        value={donations}
                        onChange={(e) => setDonations(e.target.value)}
                    />
                </FormGroup>

                <ButtonGroup>
                    <Button $variant="outline" onClick={clearForm}>
                        Clear Form
                    </Button>
                    <Button onClick={calculateRefund}>
                        Calculate Refund
                    </Button>
                </ButtonGroup>

                <Result $visible={refund !== null}>
                    <h2>Estimated Tax Refund</h2>
                    <p>{refund >= 0 ? `Refund: €${refund}` : `Amount Owed: €${Math.abs(refund)}`}</p>
                </Result>
            </CalculatorCard>
        </CalculatorOverlay>
    );
};

export default TaxReturnsCalculator;
