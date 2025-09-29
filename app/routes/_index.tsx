import { Fragment, useState } from 'react';
import Header from '../components/Layout/Header';
import Hero from '../components/Layout/Hero';
import AvailableMeals from '../components/Meals/AvailableMeals';

export default function Index() {
  const showCartHandler = () => {
    // logica per mostrare il carrello
  };

  return (
    <>
      <Header onShowCart={showCartHandler} />
      <main>
        <Hero />
        <AvailableMeals />
      </main>
    </>
  );
}


