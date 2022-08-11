import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';

import Dashboard from '../pages/Dasboard';
import List from '../pages/List';
import Signin from '../pages/Signin';

export default function RoutesComponent() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/signin' element={<Signin />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/list/:type' element={<List />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}