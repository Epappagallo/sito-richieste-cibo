import { Fragment } from 'react';
// IMPORTANTE: Assicurati che i seguenti componenti esistano nei percorsi specificati.
import Header from '../components/Layout/Header';
import Hero from '../components/Layout/Hero';
import AvailableMeals from '../components/Meals/AvailableMeals';

// Aggiunta la funzione loader richiesta da React Router
export function loader() {
  return {};
}

/**
 * Pagina principale del Merch (Pasti).
 */
export default function Merch() {
  const showCartHandler = () => {
    // Logica per mostrare il carrello (dovrà essere implementata con stato o contesto)
    console.log("Mostra Carrello (logica da implementare)");
  };

  return (
    <Fragment>
      <Header onShowCart={showCartHandler} />
      <main>
        <Hero />
        <AvailableMeals />
      </main>
    </Fragment>
  );
}
