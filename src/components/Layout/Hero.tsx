import React from 'react';
import classes from './Hero.module.css';
// Importa l'immagine della food parade che hai nel layout
// Assicurati che il percorso sia corretto nella tua struttura di progetto
import mealsImage from '../../assets/meals.jpg'; 

const Hero: React.FC = () => {
  return (
    // Il contenitore principale che gestirà l'immagine di sfondo e la posizione del sommario
    <div className={classes.hero}>
      {/* L'immagine dell'intero buffet come nel layout */}
      <img 
        src={mealsImage} 
        alt="Un buffet completo di cibo delizioso" 
        className={classes.mainImage}
      />
      
      {/* La card di testo che si sovrappone (il box scuro al centro) */}
      <section className={classes.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals and enjoy a delicious
          lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time and of course by
          experienced chefs!
        </p>
      </section>
    </div>
  );
};

export default Hero;