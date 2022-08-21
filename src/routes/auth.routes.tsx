import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from '../pages/Login';

const AuthRoutes = () => (
    <Routes>
        <Route path='/login' element={<Signin />} />
    </Routes>

);

export default AuthRoutes;