import React, { useEffect } from 'react';

const ChatbotWidget = () => {
  useEffect(() => {
    // Add custom styles for the chatbot
    const style = document.createElement('style');
    style.id = 'chatbot-custom-styles';
    style.textContent = `
      #clickchat-widget.clickchat-widget {
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
        #clickchat-widget.clickchat-widget {
          width: 90% !important;
          height: 80vh !important;
          right: 5% !important;
          bottom: 10% !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Add the chatbot script
    const script = document.createElement('script');
    script.id = '__chatbotSdk__';
    script.src = 'https://mets.vip/chatbot-sdk.js';
    script.setAttribute('widgetUrl', 'https://mets.vip');
    script.setAttribute('baseUrl', 'https://mets.vip/api');
    script.setAttribute('chatbotId', '67e29d806d03dbe770390674');
    
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.getElementById('__chatbotSdk__');
      const existingStyles = document.getElementById('chatbot-custom-styles');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      if (existingStyles) {
        document.head.removeChild(existingStyles);
      }
    };
  }, []);

  return null;
};

export default ChatbotWidget; 