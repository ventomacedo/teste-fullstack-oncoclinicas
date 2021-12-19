import React, { createContext, useState, useContext } from 'react';
import AuthService from '../services/auth';

const AuthContext = createContext({ });

const AuthProvider = ({ children }) => {
    
    const [ logged, setLogged ] = useState(() => {
        const isLogged = localStorage.getItem('@oncoclinicas:token');
        return !!isLogged;
    });

    const signIn = async (email, password) => {
        const response = await AuthService.signin(email, password);
        if(response.status === 200) {
            localStorage.setItem('@oncoclinicas:token', response.token);
            setLogged(true);
            return true;
        }
        return false;
    };

    const signOut = () => {
        localStorage.removeItem('@oncoclinicas:token');
        setLogged(false);
        window.location.href = process.env.PUBLIC_URL;
    };

    return (
        <AuthContext.Provider value={{ logged, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };
