import React, { useState } from 'react';
import ChatUI from './ChatUI';
import './FloatingChat.css';
import { useTranslation } from 'react-i18next';
import robot from '../../assets/robot.png';


const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="floating-chat-container">
      <button className="chat-icon-button" onClick={toggleChat}>
        <img src={robot} alt='robot'/>
      </button>
      {isOpen && (
        <div className="chat-window">
          <ChatUI />
        </div>
      )}
    </div>
  );
};

export default FloatingChat;
