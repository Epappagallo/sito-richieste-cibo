// routes/profile.tsx

import React from 'react';
// NON usiamo più useLocation, usiamo il Context
// import { useLocation } from 'react-router-dom'; 

// Importa il tuo hook per accedere ai dati utente (Esercizio 1)
import { useUser } from '../context/UserContext'; 
// Importa il componente di protezione (Esercizio 2)
import ProtectedRoute from '../components/ProtectedRoute'; 

/**
 * Funzione loader richiesta da React Router per la gestione delle richieste.
 */
export function loader() {
  return {}; 
}

// ----------------------------------------------------------------------
// Componente Effettivo del Profilo (Contenuto Interno)
// ----------------------------------------------------------------------
/**
 * Contenuto della pagina Profilo. Legge lo username dal UserContext.
 */
const ProfileContent: React.FC = () => {
  // Leggiamo i dati utente dal Context
  const { user } = useUser();
  // Se l'utente non è qui, ProtectedRoute non ha funzionato, ma usiamo un fallback
  const username = user?.name || 'Utente Sconosciuto'; 

  return (
    <main className="pt-16 p-4 container mx-auto max-w-2xl text-center">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-10 space-y-4">
        <h1 className="text-4xl font-extrabold text-indigo-700 dark:text-indigo-400">
          Benvenuto, {username}!
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Questo è il tuo pannello personale.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Il tuo accesso è gestito tramite **UserContext**.
        </p>
      </div>
    </main>
  );
}


// ----------------------------------------------------------------------
// Componente Export di Default (Applica la Protezione)
// ----------------------------------------------------------------------
/**
 * Pagina per il Profilo Utente. Avvolta in ProtectedRoute.
 */
export default function Profile() {
    return (
        // ESERCIZIO 2: Avvolgi il contenuto del profilo nel componente di protezione.
        <ProtectedRoute>
            <ProfileContent />
        </ProtectedRoute>
    );
}