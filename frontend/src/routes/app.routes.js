import { Route, Routes } from 'react-router-dom';

import Layout      from '../Layout';
import { history } from '../helpers/history';

import Dashboard from '../pages/Dashboard';
import Doctors   from '../pages/Doctors';

const AppRoutes = () => {
    return (
        <Layout>
            <Routes navigator={history}>
                <Route path="/"        element={ <Dashboard /> } exact />
                <Route path="/medicos" element={ <Doctors />   } />
            </Routes>
        </Layout>
    );
};

export default AppRoutes;
