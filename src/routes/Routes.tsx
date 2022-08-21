import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../components/Layout';

import Dashboard from '../pages/Dasboard';
import List from '../pages/List';


export default function RoutesComponent() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/list/:type' element={<List />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}