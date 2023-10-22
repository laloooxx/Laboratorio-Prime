import React from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { Link } from 'react-router-dom';


export default function Menu() {
    const items = [
        {label: 'Inicio', icon: 'pi pi-fw pi-home', to: '/inicio'},
        {label: 'Usuarios', icon: 'pi pi-fw pi-users', to: '/usuario'},
        {label: 'Contacto', icon: 'pi pi-fw pi-comment', to: '/contacto'},
        {label: 'Sobre Messi', icon: 'pi pi-fw pi-cog', to: '/sobre-messi'}
    ];
    
    const menuItem = items.map(item => ({
        label: <Link to={item.to}>{item.label}</Link>,
        icon: item.icon
    }))

    return (
        <div className="card">
            <TabMenu model={menuItem} />
        </div>
    )
};