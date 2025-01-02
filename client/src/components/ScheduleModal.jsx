import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes, addDays } from 'date-fns';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { FINANCIAL_SERVICES } from '../constants/services';
import MultiSelect from './MultiSelect';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;

  h2 {
    color: #774800;
    margin-bottom: 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #774800;
  }

  select, input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    
    &:focus {
      outline: none;
      border-color: #774800;
    }
  }
`;

const Button = styled.button`
  background: #774800;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 1rem;

  &:hover {
    background: #8b5500;
  }

  &.cancel {
    background: #666;
  }
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  margin-bottom: 1rem;
  font-size: 0.875rem;
`;

const LoginMessage = styled.div`
  text-align: center;
  margin: 2rem;
`;

const LoginButton = styled(Button)`
  background: #4285f4;
  &:hover {
    background: #357abd;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 5px;
  resize: vertical;
`;

const ScheduleModal = ({ isOpen, onClose }) => {
  const { currentUser, signInWithGoogle, getAccessToken, accessToken } = useAuth();
  const [selectedDate, setSelectedDate] = useState(null);
  const [duration, setDuration] = useState('30');
  const [meetingType, setMeetingType] = useState('online');
  const [venue, setVenue] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [weeklyAppointments, setWeeklyAppointments] = useState([]);

  useEffect(() => {
    if (currentUser) {
      setEmail(currentUser.email || '');
      setName(currentUser.displayName || '');
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser && accessToken) {
      fetchWeeklyAppointments();
    }
  }, [currentUser, accessToken]);

  const fetchWeeklyAppointments = async () => {
    try {
      const token = await getAccessToken();
      if (!token) {
        throw new Error('No access token available');
      }

      const response = await axios.get(`http://localhost:3002/appointments/week`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.data.success) {
        setWeeklyAppointments(response.data.events);
      }
    } catch (err) {
      console.error('Error fetching appointments:', err);
    }
  };

  const handleSignIn = async () => {
    try {
      setIsSigningIn(true);
      setError(null);
      await signInWithGoogle();
    } catch (err) {
      console.error('Sign in error:', err);
      setError('Failed to sign in. Please try again and ensure popups are allowed.');
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!name || !email || selectedServices.length === 0) {
      setError('Please fill in all required fields and select at least one service.');
      setIsSubmitting(false);
      return;
    }

    try {
      const token = await getAccessToken();
      if (!token) {
        throw new Error('No access token available. Please sign in again.');
      }

      const selectedServiceLabels = FINANCIAL_SERVICES
        .filter(service => selectedServices.includes(service.id))
        .map(service => service.label);

      const response = await axios.post('http://localhost:3002/schedule', {
        selectedDate: selectedDate?.toISOString(),
        duration: parseInt(duration),
        meetingType,
        venue: meetingType === 'in-person' ? venue : 'Online Meeting',
        name,
        email,
        services: selectedServiceLabels,
        notes
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.data.success) {
        await fetchWeeklyAppointments();
        onClose();
        alert('Appointment scheduled successfully!');
      } else {
        throw new Error(response.data.error || 'Failed to schedule appointment');
      }
    } catch (err) {
      console.error('Scheduling error:', err);
      setError(err.response?.data?.error || err.message || 'Failed to schedule appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!currentUser) {
    return (
      <Modal>
        <ModalContent>
          <h2>Schedule an Appointment</h2>
          <LoginMessage>
            <p>Please sign in to schedule an appointment</p>
            <LoginButton 
              onClick={handleSignIn} 
              disabled={isSigningIn}
            >
              {isSigningIn ? 'Signing in...' : 'Sign in with Google'}
            </LoginButton>
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </LoginMessage>
        </ModalContent>
      </Modal>
    );
  }

  const filterTimes = (time) => {
    const day = time.getDay();
    if (day === 0) return false; // Sunday not available
    
    const hours = time.getHours();
    return hours >= 11 && hours < 20; // Available 11:00-20:00
  };

  return isOpen ? (
    <Modal>
      <ModalContent>
        <h2>Schedule an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <label>Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <label>Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <label>Services Required *</label>
            <MultiSelect
              options={FINANCIAL_SERVICES}
              value={selectedServices}
              onChange={setSelectedServices}
              placeholder="Select services..."
            />
          </FormGroup>

          <FormGroup>
            <label>Select Date and Time *</label>
            <DatePicker
              selected={selectedDate}
              onChange={setSelectedDate}
              showTimeSelect
              filterTime={filterTimes}
              minTime={setHours(setMinutes(new Date(), 0), 11)}
              maxTime={setHours(setMinutes(new Date(), 0), 20)}
              minDate={new Date()}
              maxDate={addDays(new Date(), 30)}
              dateFormat="MMMM d, yyyy h:mm aa"
              placeholderText="Select date and time"
              required
            />
          </FormGroup>

          <FormGroup>
            <label>Duration *</label>
            <select 
              value={duration} 
              onChange={(e) => setDuration(e.target.value)}
              required
            >
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
              <option value="90">1.5 hours</option>
              <option value="120">2 hours</option>
              <option value="180">3 hours</option>
            </select>
          </FormGroup>

          <FormGroup>
            <label>Meeting Type *</label>
            <select 
              value={meetingType} 
              onChange={(e) => setMeetingType(e.target.value)}
              required
            >
              <option value="online">Online</option>
              <option value="in-person">In Person</option>
            </select>
          </FormGroup>

          {meetingType === 'in-person' && (
            <FormGroup>
              <label>Venue *</label>
              <input
                type="text"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                placeholder="Enter meeting venue"
                required
              />
            </FormGroup>
          )}

          <FormGroup>
            <label>Additional Notes</label>
            <TextArea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any specific questions or concerns?"
            />
          </FormGroup>

          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Scheduling...' : 'Schedule Appointment'}
            </Button>
            <Button type="button" className="cancel" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </ModalContent>
    </Modal>
  ) : null;
};

export default ScheduleModal; 