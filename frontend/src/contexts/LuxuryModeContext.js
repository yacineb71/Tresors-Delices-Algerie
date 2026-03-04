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
    // Clear any old localStorage value to ensure light theme by default
    if (!isLuxuryMode) {
      localStorage.removeItem('luxuryMode');
      document.body.classList.remove('luxury-mode');
      document.documentElement.style.removeProperty('--bg-primary');
      document.documentElement.style.removeProperty('--bg-secondary');
      document.documentElement.style.removeProperty('--text-primary');
      document.documentElement.style.removeProperty('--text-secondary');
      document.documentElement.style.removeProperty('--accent');
    }
    
    // Apply luxury mode classes to body only when enabled
    if (isLuxuryMode) {
      document.body.classList.add('luxury-mode');
      localStorage.setItem('luxuryMode', 'true');
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
