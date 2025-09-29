import React, { Fragment, useState } from 'react';
import { Outlet } from 'react-router-dom'; // Necessario per mostrare i contenuti figli
import Header from './Header'; // Il tuo Header.tsx

const RootLayout: React.FC = () => {
  // Lo stato del carrello rimarrà qui nel layout principale
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => setCartIsShown(true);
  const hideCartHandler = () => setCartIsShown(false);

  return (
    <Fragment>
      {/* {cartIsShown && <Cart onClose={hideCartHandler} />} <- QUI andrebbe il carrello modale */}
      
      {/* 1. L'Header è sempre visibile */}
      <Header onShowCart={showCartHandler} />
      
      <main>
        {/* 2. L'Outlet mostra il contenuto della rotta corrente (es. HomePage) */}
        <Outlet /> 
      </main>
      
      {/* Opzionalmente: Footer */}
    </Fragment>
  );
};

export default RootLayout;