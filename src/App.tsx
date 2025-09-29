import './App.css'
import React, { Fragment, useState } from 'react'; 
import Header from './components/Layout/Header';
import Hero from './components/Layout/Hero';
import AvailableMeals from './components/Meals/AvailableMeals';

function App() {
  // src/App.tsx
// ...
const showCartHandler = () => {
  // logica per mostrare il carrello
};

  return (
    // Usa i frammenti brevi al posto di <Fragment>
    <> 
      <Header onShowCart={showCartHandler} />
      <main>
        <Hero />
        <AvailableMeals />
      </main>
    </>
  );
}

export default App
