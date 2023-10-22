import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import ContactoForm from '../pages/Contacto';
import User from '../pages/MostrarUsuarios';
import Config from '../pages/Configuracion';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/inicio' element={<Inicio />} />
            <Route path='/usuario' element={<User />} />
            <Route path='/contacto' element={<ContactoForm />} />
            <Route path='/sobre-messi' element={<Config />} />
        </Routes>
    );
}

export default AppRoutes;
