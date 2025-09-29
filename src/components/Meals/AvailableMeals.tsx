// src/components/Meals/AvailableMeals.tsx

import React from 'react';
import MealItem from './MealItem'; // Importa il componente appena creato
import classes from './AvailableMeals.module.css';

// Dati fittizi (li useremo finché non connetteremo a un server)
const DUMMY_MEALS = [
  { id: 'm1', name: 'Sushi', description: 'Finest fish and veggies', price: 22.99 },
  { id: 'm2', name: 'Schnitzel', description: 'A german specialty!', price: 16.50 },
  // Aggiungi altri piatti se li hai
];

const AvailableMeals: React.FC = () => {
  // Mappa i dati fittizi sui componenti MealItem
  const mealsList = DUMMY_MEALS.map(meal => (
    <MealItem
      key={meal.id}
      id={meal.id} // Passa l'id per usarlo nel form
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    // La sezione che contiene la lista dei pasti
    <section className={classes.meals}>
      <ul>
        {mealsList}
      </ul>
    </section>
  );
};

export default AvailableMeals;