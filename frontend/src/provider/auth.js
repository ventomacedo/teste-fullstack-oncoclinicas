import React, { createContext, useState, useContext, useEffect } from 'react';

import AuthService from '../services/auth';
import { history } from '../helpers/history';

const AuthContext = createContext({ });

const AuthProvider = ({ children }) => {
    
    const [ logged, setLogged ] = useState(() => {
        return !!localStorage.getItem('@oncoclinicas:token');
    });

    useEffect(() => {
        !logged && history.push('/');
    }, [ logged ]);

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
        window.location.href = '/';
    };

    return (
        <AuthContext.Provider value={{ logged, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
