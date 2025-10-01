// app/context/ThemeContext.tsx

import React, { createContext, useContext, useState, useEffect } from 'react';

// ----------------------------------------------------------------------
// 1. Definizioni dei Tipi
// ----------------------------------------------------------------------

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// ----------------------------------------------------------------------
// 2. Creazione del Context
// ----------------------------------------------------------------------

// Forniamo un valore iniziale fittizio, che verrà sovrascritto dal Provider
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ----------------------------------------------------------------------
// 3. Provider del Context
// ----------------------------------------------------------------------

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Funzione per leggere il tema iniziale da localStorage o impostare 'light' come fallback
  const getInitialTheme = (): Theme => {
    if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') as Theme;
    }
    // Se non c'è nulla, usa il default 'light'
    return 'light';
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Applicazione della classe 'dark' al body quando il tema cambia
  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;

    // Rimuove entrambe le classi per pulizia
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);

    // Salva l'impostazione nel localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Logica per cambiare il tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// ----------------------------------------------------------------------
// 4. Hook Custom per il Consumo
// ----------------------------------------------------------------------

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};