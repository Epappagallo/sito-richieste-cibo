

import React, {createContext,useContext,useState,type ReactNode,type FC} from 'react';

interface User {
    id: string;
    name: string;
    email: string;
    loggedIn: boolean;
}
interface UserContextType {
    user: User | null;
    login: (name: string) => void;
    logout: () => void;
}

const initialContext: UserContextType = {
    user: null,
    login: () => {},
    logout: () => {},
};

const UserContext = createContext<UserContextType>(initialContext);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
    // Stato iniziale basato sul localStorage o nullo
    const [user, setUser] = useState<User | null>(() => {
        if (typeof window !== 'undefined') {
            const storedUser = localStorage.getItem('user');
            return storedUser ? JSON.parse(storedUser) : null;
        }
        return null;
    });

    // Funzione per il login
    const login = (name: string) => {
        const newUser: User = {
            id: 'u1', 
            name: name,
            email: `${name.toLowerCase()}@example.com`,
            loggedIn: true,
        };
        setUser(newUser);
        if (typeof window !== 'undefined') {
            localStorage.setItem('user', JSON.stringify(newUser));
        }
    };

    // Funzione per il logout
    const logout = () => {
        setUser(null);
        if (typeof window !== 'undefined') {
            localStorage.removeItem('user');
        }
    };

    const contextValue: UserContextType = {
        user,
        login,
        logout,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};

// ----------------------------------------------------------------------
// 4. Hook Custom per il Consumo
// ----------------------------------------------------------------------

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    // Non è necessario un controllo su 'undefined' qui se forniamo un initialContext
    // if (context === undefined) {
    //     throw new Error('useUser must be used within a UserProvider');
    // }
    return context;
};