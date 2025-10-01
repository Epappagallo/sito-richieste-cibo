// components/Layout/Header.tsx

interface HeaderProps {
  // Funzione per mostrare il carrello, non prende argomenti e non ritorna nulla
  onShowCart: () => void; 
}

import React from 'react';
// IMPORTANTE: Aggiungi l'import di NavLink e useNavigate
import { NavLink, useNavigate } from 'react-router-dom';
// *** QUESTA RIGA DEVE ESSERE PRESENTE ***
import classes from './Header.module.css'; 
// Importa i tuoi hook
import { useUser } from '../../context/UserContext'; 
import { useTheme } from '~/context/ThemeContext'; // Import per Esercizio 3

// Stili base per i NavLink, usando i CSS Modules
const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${classes.navLink} ${isActive ? classes.active : ''}`;

// Usiamo React.FC<HeaderProps> per tipizzare il componente
const Header: React.FC<HeaderProps> = (props) => {
  // Consuma i contesti
  const { user, logout } = useUser();
  const { theme, toggleTheme } = useTheme(); 
  const navigate = useNavigate();

  const handleLogout = () => {
      logout();
      navigate('/'); // Reindirizza alla home dopo il logout
  };

  const authContent = user?.loggedIn ? (
      <>
          {/* Mostra: 'Ciao, <name>' */}
          <span className={classes.userGreeting}>Ciao, {user.name}</span>
          <button onClick={handleLogout} className={classes.authButton}>
              Esci
          </button>
      </>
  ) : (
      // Mostra: un bottone 'Accedi'
      <NavLink to="/login" className={classes.authButton}>
          Accedi
      </NavLink>
  );

  return (
    <header className={classes.header}>
      <h1>React Meal</h1>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/merch" className={navLinkClass}>
              Merch
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={navLinkClass}>
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      
      {/* Area di Login/Logout Condizionale (Esercizi 1 & 3) */}
      <div className={classes.authArea}>
          {authContent}
          {/* Toggle Tema */}
          <button 
              onClick={toggleTheme} 
              className={classes.themeToggle} 
              title={`Passa al tema ${theme === 'light' ? 'scuro' : 'chiaro'}`}
          >
              {theme === 'light' ? '☀️' : '🌙'}
          </button>
      </div>

      {/* Il pulsante del Carrello */}
      <button 
        className={classes.button} 
        onClick={props.onShowCart}
      >
        {/* Icona carrello SVG inline */}
        <svg className={classes.icon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
          <path d="M9 8V17H11V8H9ZM13 8V17H15V8H13Z"/>
        </svg>
        <span>Your Cart</span>
        
        <span className={classes.badge}>3</span> 
      </button>
    </header>
  );
};

export default Header;