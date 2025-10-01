// app/routes/merch.tsx

import React from 'react';
import { useProducts } from '../context/ProductsContext';
// Importa l'interfaccia per la tipizzazione da dove è definita
import { type Meal } from '../components/Meals/dummy-meals'; 

/**
 * Funzione loader richiesta da React Router per la gestione delle richieste.
 */
export function loader() {
  return {}; 
}

// ----------------------------------------------------------------------
// Componente
// ----------------------------------------------------------------------

export default function Merch() {
  // Consuma i dati, lo stato di caricamento e l'errore
  const { products, isLoading, error } = useProducts();

  // 1. Gestione del Caricamento
  if (isLoading) {
    return (
      <main className="pt-16 p-4 container mx-auto text-center">
        <p className="text-xl text-indigo-600 dark:text-indigo-400">Caricamento prodotti...</p>
      </main>
    );
  }

  // 2. Gestione dell'Errore
  if (error) {
    return (
      <main className="pt-16 p-4 container mx-auto text-center">
        <p className="text-xl text-red-600 dark:text-red-400">Errore nel caricamento: {error}</p>
      </main>
    );
  }

  // 3. Render della Lista
  return (
    <main className="pt-24 p-4 container mx-auto max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        La Nostra Merce
      </h1>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: Meal) => (
          <li 
            key={product.id} 
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transition-transform hover:scale-[1.02]"
          >
            <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{product.name}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-green-700 dark:text-green-400">
                ${product.price.toFixed(2)}
              </span>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-1 px-3 rounded-lg transition-colors">
                Aggiungi
              </button>
            </div>
          </li>
        ))}
      </ul>
      
      {products.length === 0 && !isLoading && (
        <p className="text-center text-lg text-gray-500 mt-8">Nessun prodotto disponibile.</p>
      )}
    </main>
  );
}