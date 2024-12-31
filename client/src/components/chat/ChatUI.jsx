import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "./ChatUI.css";
import "./i18next";

const BASE_URL = "http://localhost:3002";

const ChatUI = () => {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState([
    { role: "assistant", content: t("greeting") },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState("dark");
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);

  useEffect(() => {
    document.body.className = theme + "-theme";
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() !== "") {
      const newUserMessage = { role: "user", content: inputValue };
      setMessages((prevMessages) => [...prevMessages, newUserMessage]);
      setInputValue("");
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.post(`${BASE_URL}/generate`, {
          prompt: inputValue,
        });
        const assistantMessage = {
          role: "assistant",
          content: response.data.message,
        };
        setMessages((prevMessages) => [...prevMessages, assistantMessage]);
      } catch (error) {
        console.error(error);
        setError(t("error"));
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setShowLanguageSelector(false);
  };

  return (
    <div className={`chat-container ${theme}-theme`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? t("themeLight") : t("themeDark")}
      </button>
      <button
        className="language-button"
        onClick={() => setShowLanguageSelector(!showLanguageSelector)}
      >
        🌐
      </button>
      {showLanguageSelector && (
        <div className="language-selector">
          <button onClick={() => handleLanguageChange("en")}>English</button>
          <button onClick={() => handleLanguageChange("tr")}>German</button>
        </div>
      )}
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            {message.content}
          </div>
        ))}
        {isLoading && <div className="message assistant">{t("sending")}</div>}
        {error && <div className="error-message">{error}</div>}
      </div>
      <div className="input-area">
        <input
          type="text"
          className="prompt-input"
          placeholder={t("placeholder")}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          disabled={isLoading}
        />
        <button
          className="send-button"
          onClick={handleSendMessage}
          disabled={isLoading}
        >
          <svg
            className="send-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatUI;
