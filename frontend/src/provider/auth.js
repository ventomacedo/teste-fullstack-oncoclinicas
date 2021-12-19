import React, { createContext, useState, useContext, useEffect } from 'react';

import AuthService from '../services/auth';
import { history } from '../helpers/history';

const AuthContext = createContext({ });

const AuthProvider = ({ children }) => {
    

    useEffect(() => {
        !!logged && history.push('/dashboard');
    }, [ logged ]);

    const [ logged, setLogged ] = useState(() => {
        const isLogged = localStorage.getItem('@oncoclinicas:token');
        return !!isLogged;
    });

    const signIn = async (email, password) => {
        const response = await AuthService.signin(email, password);
        if(response) {
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
