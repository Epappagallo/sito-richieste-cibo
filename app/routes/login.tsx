import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Funzione loader richiesta da React Router.
 */
export function loader() {
  return {};
}

/**
 * Pagina di Login con form e reindirizzamento a /profile tramite useNavigate.
 */
export default function Login() {
  // Inizializza l'hook useNavigate
  const navigate = useNavigate();
  
  // Stato per l'input dello username
  const [username, setUsername] = useState('');
  // Stato per i messaggi di feedback
  const [message, setMessage] = useState('');

  /**
   * Gestisce l'invio del form.
   * Al successo, reindirizza l'utente a /profile con lo username nello stato.
   */
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); 
    setMessage('');

    if (username.trim() === '') {
      setMessage('Per favore, inserisci un nome utente per accedere.');
      return;
    }

    // Usa useNavigate per reindirizzare alla rotta /profile.
    // L'oggetto { state: { username } } è uno stato che può essere letto da /profile.
    navigate('/profile', { state: { username } }); 
  };

  return (
    <main className="pt-16 p-4 container mx-auto max-w-md">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900 dark:text-white">
        Esegui l'Accesso
      </h1>
      
      <form 
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-2xl rounded-xl p-8 space-y-6"
      >
        <div className="space-y-2">
          <label 
            htmlFor="username" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Nome Utente
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition duration-150"
            placeholder="es. JohnDoe"
          />
        </div>

        {/* Messaggio di errore/avviso */}
        {message && (
          <p className="text-sm text-red-500 font-medium">{message}</p>
        )}

        {/* Bottone Accedi */}
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 rounded-lg shadow-md text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={username.trim() === ''}
        >
          Accedi
        </button>
      </form>
    </main>
  );
}
