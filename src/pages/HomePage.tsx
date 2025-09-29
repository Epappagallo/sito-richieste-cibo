// Crea una nuova cartella src/pages/

import React from 'react';
import Hero from '../components/Layout/Hero'; // Il tuo Hero.tsx
import AvailableMeals from '../components/Meals/AvailableMeals'; // La tua lista di pasti

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      {/* La sezione Hero/Sommario */}
      <Hero />
      
      {/* La lista dei pasti */}
      <AvailableMeals />
    </React.Fragment>
  );
};

export default HomePage;