import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import App         from './app.routes';
import Auth        from './auth.routes';
import { useAuth } from '../provider/auth';


const Routes = () => {
    const { logged } = useAuth();
    return <BrowserRouter>{ logged ? <App /> : <Auth /> }</BrowserRouter>;
};

export default Routes;
