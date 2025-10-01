// app/components/Meals/dummy-meals.tsx

// Definisci l'interfaccia per la struttura di un pasto
export interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
}

// Array di pasti fittizi
export const DUMMY_MEALS: Meal[] = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green',
    price: 18.99,
  },
];