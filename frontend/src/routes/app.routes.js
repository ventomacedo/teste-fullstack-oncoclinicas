import { Route, Routes } from 'react-router-dom';

import { history } from '../helpers/history';
import Dashboard   from '../pages/Dashboard';

const AppRoutes = () => {
    return (
        <Routes navigator={history}>
            <Route path="/" element={ <Dashboard /> } exact />
        </Routes>
    );
};

export default AppRoutes;
