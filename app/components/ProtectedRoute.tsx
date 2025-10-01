// app/components/ProtectedRoute.tsx (File corretto)

import React, { 
    type ReactNode, // <-- AGGIUNGI 'type' QUI
    type FC,        // <-- E AGGIUNGI 'type' QUI
    useEffect 
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

// Interfaccia per le props (riceve i figli da proteggere)
interface ProtectedRouteProps {
    children: ReactNode;
}

/**
 * Componente che avvolge le rotte che richiedono l'autenticazione.
 * Reindirizza l'utente alla pagina di login se non autenticato.
 */
const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
    const { user } = useUser();
    const navigate = useNavigate();

    // Quando lo stato utente cambia, verifica l'accesso
    useEffect(() => {
        // Se l'utente non è loggato
        if (!user || !user.loggedIn) {
            // Reindirizza alla pagina di login
            // Sostituiamo per evitare che la pagina protetta sia nello storico
            navigate('/login', { replace: true });
        }
    }, [user, navigate]);

    // Se l'utente è loggato, mostra i figli (il contenuto protetto)
    // Se non è loggato, useEffect attiverà il reindirizzamento
    if (user?.loggedIn) {
        return <>{children}</>;
    }

    // Si può anche ritornare null o un semplice div di caricamento
    return null; 
};

export default ProtectedRoute;