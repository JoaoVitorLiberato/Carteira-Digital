import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dasboard';
import List from './pages/List';
import Signin from './pages/Signin';

export default function RoutesComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/list' element={<List />} />
            </Routes>
        </BrowserRouter>
    );
}