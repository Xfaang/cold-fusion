import React from 'react';
import { useLanguage } from '../LanguageContext';
import './LanguageToggle.css';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pl' ? 'en' : 'pl');
  };

  return (
    <div className="language-toggle">
      <div 
        className={`language-switch ${language === 'en' ? 'english' : 'polish'}`}
        onClick={toggleLanguage}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleLanguage();
          }
        }}
        aria-label={`Switch to ${language === 'pl' ? 'English' : 'Polish'}`}
      >
        <div className="language-switch-track">
          <div className="language-switch-thumb">
            <span className="language-switch-text">
              {language === 'pl' ? 'PL' : 'EN'}
            </span>
          </div>
          <div className="language-labels">
            <span className={`language-label left ${language === 'pl' ? 'active' : ''}`}>
              PL
            </span>
            <span className={`language-label right ${language === 'en' ? 'active' : ''}`}>
              EN
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageToggle;