import React from 'react';
import classes from './MealItem.module.css';

// Interfaccia per i dati di un singolo pasto
interface MealItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
}

// Interfaccia per le props del form (potrebbe essere un componente separato, ma lo teniamo qui per ora)
interface MealItemFormProps {
  id: string;
  // Aggiungeremo qui la funzione onAddToCart quando implementeremo il context/redux
  onAddToCart: (amount: number) => void;
}

// --- Componente per il Form (Input e Pulsante + Add) ---
const MealItemForm: React.FC<MealItemFormProps> = (props) => {
  // Nota: Qui andrebbe la logica per gestire l'input amount (useState e useRef)
  
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    
    // Per ora, simuliamo l'aggiunta di 1
    props.onAddToCart(1); 
  };
  
  return (
    // Il form con il pulsante "Add" come da layout
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.input}>
        <label htmlFor={`amount_${props.id}`}>Amount</label>
        <input
          id={`amount_${props.id}`}
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
      </div>
      <button className={classes.addButton}>+ Add</button>
    </form>
  );
};


// --- Componente Principale MealItem ---
const MealItem: React.FC<MealItemProps> = (props) => {
  // Formatta il prezzo per la visualizzazione (€ o $)
  const price = `$${props.price.toFixed(2)}`;

  // Placeholder function per onAddToCart (sarà gestita dal contesto)
  const addToCartHandler = (amount: number) => {
    console.log(`Aggiunti ${amount} di ${props.name} al carrello!`);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm 
          id={props.id} 
          onAddToCart={addToCartHandler} 
        />
      </div>
    </li>
  );
};

export default MealItem;