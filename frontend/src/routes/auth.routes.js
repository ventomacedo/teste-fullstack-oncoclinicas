import { Route, Routes } from 'react-router-dom';

import { history } from '../helpers/history';
import SignIn      from '../pages/Signin';

const AuthRoutes = () => {
  return (
    <Routes navigator={history}>
        <Route path="*" element={ <SignIn/> } />
    </Routes>
)};
    
export default AuthRoutes;
