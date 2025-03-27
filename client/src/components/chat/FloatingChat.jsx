import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
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
  height: 400px;
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

const ChatFrameContainer = styled.div`
  height: calc(100% - 50px); // 50px is header height
  width: 100%;
`;

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatWindowRef = useRef(null);
  const chatFrameContainerRef = useRef(null);
  const { t } = useTranslation();
  const widgetLoaded = useRef(false);

  // Initialize and manage the chatbot
  useEffect(() => {
    // Only attempt to load the widget when the chat window is open
    if (isOpen && !widgetLoaded.current && chatFrameContainerRef.current) {
      // Clean up any existing chatbot instances
      const existingScript = document.getElementById('__chatbotSdk__');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      
      const existingIframe = document.getElementById('clickchat-widget');
      if (existingIframe) {
        existingIframe.remove();
      }

      // Create and append the script element
      const script = document.createElement('script');
      script.id = '__chatbotSdk__';
      script.src = 'https://mets.vip/chatbot-sdk.js';
      script.setAttribute('widgetUrl', 'https://mets.vip');
      script.setAttribute('baseUrl', 'https://mets.vip/api');
      script.setAttribute('chatbotId', '67e29d806d03dbe770390674');
      
      // Set a flag when loaded
      script.onload = () => {
        console.log('Chatbot script loaded successfully');
        widgetLoaded.current = true;
        
        // Wait for iframe to be created then move it into our container
        setTimeout(() => {
          const chatIframe = document.getElementById('clickchat-widget');
          if (chatIframe && chatFrameContainerRef.current) {
            // Style the iframe to fit our container
            chatIframe.style.position = 'relative';
            chatIframe.style.height = '100%';
            chatIframe.style.width = '100%';
            chatIframe.style.border = 'none';
            chatIframe.style.borderRadius = '0';
            chatIframe.style.bottom = '0';
            chatIframe.style.right = '0';
            
            // Move it into our container
            chatFrameContainerRef.current.appendChild(chatIframe);
            console.log('Moved chatbot iframe into our container');
          } else {
            console.warn('Chatbot iframe not found or container not ready');
          }
        }, 1000);
      };
      
      document.body.appendChild(script);
    }
    
    // Cleanup function
    return () => {
      // We don't remove the script on component unmount to keep the widget persistent
      // This is intentional, only clean up if the component is truly being removed
      if (!isOpen) {
        const chatIframe = document.getElementById('clickchat-widget');
        if (chatIframe && chatIframe.parentElement === chatFrameContainerRef.current) {
          // Only detach, don't remove to preserve widget state
          chatFrameContainerRef.current.removeChild(chatIframe);
          document.body.appendChild(chatIframe);
          chatIframe.style.display = 'none';
        }
      }
    };
  }, [isOpen]);

  return (
    <ChatContainer>
      <ChatButton onClick={() => setIsOpen(!isOpen)}>
        <img src={robot} alt={t('aiAssistant')} />
      </ChatButton>

      {isOpen && (
        <ChatWindow ref={chatWindowRef}>
          <ChatHeader>
            <span>{t('aiAssistant')}</span>
            <X 
              style={{ cursor: 'pointer' }} 
              onClick={() => setIsOpen(false)}
            />
          </ChatHeader>
          
          <ChatFrameContainer ref={chatFrameContainerRef} />
        </ChatWindow>
      )}
    </ChatContainer>
  );
};

export default FloatingChat;
