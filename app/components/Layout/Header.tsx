interface HeaderProps {
  // Funzione per mostrare il carrello, non prende argomenti e non ritorna nulla
  onShowCart: () => void; 
}

import React from 'react';
// Potresti importare un'icona, ad esempio da 'react-icons'
// import { FaShoppingCart } from 'react-icons/fa'; 
import classes from './Header.module.css'; // Assumendo che usi i moduli CSS

// Usiamo React.FC<HeaderProps> per tipizzare il componente
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className={classes.header}>
      <h1>React Meal</h1>
      
      {/* Il pulsante del Carrello */}
      <button 
        className={classes.button} 
        onClick={props.onShowCart} // Chiama la funzione passata come prop
      >
        {/* Icona carrello SVG inline */}
        <svg className={classes.icon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
          <path d="M9 8V17H11V8H9ZM13 8V17H15V8H13Z"/>
        </svg>
        <span>Your Cart</span>
        
        {/* Il badge con il conteggio degli articoli (statico '3' come da immagine) */}
        <span className={classes.badge}>3</span> 
      </button>
    </header>
  );
};

export default Header;