import React, { createContext, useContext, useState, useEffect } from 'react';

const LuxuryModeContext = createContext();

export const useLuxuryMode = () => {
  const context = useContext(LuxuryModeContext);
  if (!context) {
    throw new Error('useLuxuryMode must be used within a LuxuryModeProvider');
  }
  return context;
};

export const LuxuryModeProvider = ({ children }) => {
  const [isLuxuryMode, setIsLuxuryMode] = useState(false); // Default to false - normal light theme

  useEffect(() => {
    localStorage.setItem('luxuryMode', isLuxuryMode);
    
    // Apply luxury mode classes to body
    if (isLuxuryMode) {
      document.body.classList.add('luxury-mode');
      document.documentElement.style.setProperty('--bg-primary', '#0a0a0a');
      document.documentElement.style.setProperty('--bg-secondary', '#1a1a1a');
      document.documentElement.style.setProperty('--text-primary', '#ffd700');
      document.documentElement.style.setProperty('--text-secondary', '#d4af37');
      document.documentElement.style.setProperty('--accent', '#b8860b');
    } else {
      document.body.classList.remove('luxury-mode');
      document.documentElement.style.removeProperty('--bg-primary');
      document.documentElement.style.removeProperty('--bg-secondary');
      document.documentElement.style.removeProperty('--text-primary');
      document.documentElement.style.removeProperty('--text-secondary');
      document.documentElement.style.removeProperty('--accent');
    }
  }, [isLuxuryMode]);

  const toggleLuxuryMode = () => {
    setIsLuxuryMode(prev => !prev);
  };

  return (
    <LuxuryModeContext.Provider value={{ isLuxuryMode, toggleLuxuryMode }}>
      {children}
    </LuxuryModeContext.Provider>
  );
};

export default LuxuryModeContext;
