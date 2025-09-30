import React from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Funzione loader richiesta da React Router per la gestione delle richieste.
 */
export function loader() {
  return new Response(JSON.stringify({}), {
    headers: {
      "Content-Type": "application/json"
    }
  });
}

/**
 * Pagina per il Profilo Utente. Legge lo username dallo stato di navigazione.
 */
export default function Profile() {
  // Usiamo useLocation per accedere allo stato passato da useNavigate
  const location = useLocation();
  // Estraiamo il nome utente, con un fallback a 'Ospite'
  const username = location.state?.username || 'Ospite';

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
          {username === 'Ospite' 
            ? "Non hai effettuato l'accesso completo." 
            : "Accesso verificato tramite useNavigate."}
        </p>
      </div>
    </main>
  );
}
