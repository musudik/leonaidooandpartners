import React, { useState } from 'react';
import { Send, X, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import robot from '../../assets/robot.png';
import styled from 'styled-components';

const ChatContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999; // Increased z-index to stay above footer
`;

const ChatButton = styled.button`
  background: #774800;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

const ChatWindow = styled.div`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 350px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  animation: slideUp 0.3s ease;
  z-index: 9999;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 300px;
    bottom: 70px;
  }
`;

const ChatHeader = styled.div`
  padding: 15px;
  background: #774800;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChatBody = styled.div`
  height: 300px;
  overflow-y: auto;
  padding: 15px;
  background: #f5f5f5;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #774800;
    border-radius: 3px;
  }
`;

const Message = styled.div`
  margin: 8px 0;
  padding: 10px 15px;
  border-radius: 15px;
  max-width: 80%;
  word-wrap: break-word;
  ${props => props.isUser ? `
    background: #774800;
    color: white;
    margin-left: auto;
  ` : `
    background: white;
    color: #333;
    margin-right: auto;
  `}
`;

const InputArea = styled.div`
  padding: 15px;
  background: white;
  display: flex;
  gap: 10px;
  border-top: 1px solid #eee;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  outline: none;

  &:focus {
    border-color: #774800;
  }
`;

const SendButton = styled.button`
  background: #774800;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #8b5500;
  }

  &:disabled {
    background: #ccc;
  }
`;

export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Hello! How can I help you?", isUser: false }]);
  const [message, setMessage] = useState('');
  const { t } = useTranslation();

  const handleSend = async () => {
    if (!message.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: message, isUser: true }]);

    try {
      const response = await fetch(`${BASE_URL}/chat/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: message }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessages(prev => [...prev, { text: data.message, isUser: false }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        text: 'Sorry, I encountered an error. Please try again.', 
        isUser: false 
      }]);
    }

    setMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <ChatContainer>
      <ChatButton onClick={() => setIsOpen(!isOpen)}>
        <img src={robot} alt="Chat" />
      </ChatButton>

      {isOpen && (
        <ChatWindow>
          <ChatHeader>
            <span>AI Assistant</span>
            <X 
              style={{ cursor: 'pointer' }} 
              onClick={() => setIsOpen(false)}
            />
          </ChatHeader>

          <ChatBody>
            {messages.map((msg, index) => (
              <Message key={index} isUser={msg.isUser}>
                {msg.text}
              </Message>
            ))}
          </ChatBody>

          <InputArea>
            <Input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t('placeholder')}
            />
            <SendButton onClick={handleSend} disabled={!message.trim()}>
              <Send size={18} />
            </SendButton>
          </InputArea>
        </ChatWindow>
      )}
    </ChatContainer>
  );
};

export default FloatingChat;
