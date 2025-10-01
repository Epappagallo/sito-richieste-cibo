// app/context/ProductsContext.tsx (Versione completa e corretta)

import React, { 
    createContext, 
    useContext, 
    useState, 
    useEffect, 
    type ReactNode, 
    type FC         
} from 'react';
import { type Meal } from '../components/Meals/dummy-meals'; 

// ----------------------------------------------------------------------
// 1. Definizioni dei Tipi
// ----------------------------------------------------------------------

interface ProductsContextType {
  products: Meal[];
  isLoading: boolean;
  error: string | null;
}

// ----------------------------------------------------------------------
// 2. Creazione del Context (QUI è dove DEVE essere definito)
// ----------------------------------------------------------------------

// *** L'ERRORE È PROBABILMENTE DOVUTO ALLA MANCANZA DI QUESTA SEZIONE! ***
const ProductsContext = createContext<ProductsContextType | undefined>(undefined);
// ^^^^^^^^^^^^^^^^^^^ Assicurati che il nome sia corretto

// ----------------------------------------------------------------------
// 3. Provider del Context (USA IL CONTEXT CREATO SOPRA)
// ----------------------------------------------------------------------

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsProvider: FC<ProductsProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const { DUMMY_MEALS } = require('../components/Meals/dummy-meals');
        const response: Meal[] = await new Promise(resolve => {
            setTimeout(() => {
                resolve(DUMMY_MEALS);
            }, 1500); 
        });

        if (!response || response.length === 0) {
          throw new Error('Nessun dato prodotto trovato.');
        }

        setProducts(response);
      } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError('Si è verificato un errore sconosciuto durante il fetching.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []); 

  const contextValue: ProductsContextType = {
    products,
    isLoading,
    error,
  };

  return (
    // Usa il Context qui
    <ProductsContext.Provider value={contextValue}> 
      {children}
    </ProductsContext.Provider>
  );
};

// ----------------------------------------------------------------------
// 4. Hook Custom per il Consumo
// ----------------------------------------------------------------------

export const useProducts = (): ProductsContextType => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};