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
        {/* <FaShoppingCart className={classes.icon} />  */}
        <span>Your Cart</span>
        
        {/* Il badge con il conteggio degli articoli (statico '3' come da immagine) */}
        <span className={classes.badge}>3</span> 
      </button>
    </header>
  );
};

export default Header;