import React, { useEffect } from 'react';

const ChatbotWidget = () => {
  useEffect(() => {
    // First, check and remove any existing widget or script
    const existingScript = document.getElementById('__chatbotSdk__');
    if (existingScript) {
      document.body.removeChild(existingScript);
    }
    
    const existingIframe = document.getElementById('clickchat-widget');
    if (existingIframe) {
      existingIframe.remove();
    }

    // Create and add custom styles for the chatbot
    const style = document.createElement('style');
    style.id = 'chatbot-custom-styles';
    style.textContent = `
      #clickchat-widget {
        width: 400px !important;
        height: 600px !important;
        position: fixed !important;
        right: 20px !important;
        bottom: 20px !important;
        border: none !important;
        border-radius: 12px !important;
        z-index: 9999 !important;
      }

      @media (max-width: 480px) {
        #clickchat-widget {
          width: 90% !important;
          height: 80vh !important;
          right: 5% !important;
          bottom: 10% !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Create and add the script element
    const script = document.createElement('script');
    script.id = '__chatbotSdk__';
    script.src = 'https://mets.vip/chatbot-sdk.js';
    script.setAttribute('widgetUrl', 'https://mets.vip');
    script.setAttribute('baseUrl', 'https://mets.vip/api');
    script.setAttribute('chatbotId', '67e29d806d03dbe770390674');
    
    // Add debugging callbacks
    script.onload = () => {
      console.log('Chatbot script loaded successfully');
    };
    
    script.onerror = (error) => {
      console.error('Error loading chatbot script:', error);
    };
    
    // Add the script to the document body
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      const cleanupScript = document.getElementById('__chatbotSdk__');
      if (cleanupScript) {
        document.body.removeChild(cleanupScript);
      }
      
      const cleanupStyles = document.getElementById('chatbot-custom-styles');
      if (cleanupStyles) {
        document.head.removeChild(cleanupStyles);
      }
    };
  }, []);

  return null;
};

export default ChatbotWidget; 