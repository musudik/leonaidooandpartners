import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
const resources = {
  en: {
    translation: {
      'placeholder': 'Type your message...',
      'aiAssistant': 'AI Assistant',
      'errorMessage': 'Sorry, I encountered an error. Please try again.',
      'connectionError': 'Unable to connect to the server. Please check your connection.'
    }
  },
  de: {
    translation: {
      'placeholder': 'Nachricht eingeben...',
      'aiAssistant': 'KI-Assistent',
      'errorMessage': 'Entschuldigung, ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
      'connectionError': 'Keine Verbindung zum Server möglich. Bitte überprüfen Sie Ihre Verbindung.'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;