import { NavLink } from 'react-router-dom';
import Heart from '../../../public/assets/icons/heart-solid.svg?react';

import '../../styles/navbar/navbar.css';

export const Navbar = () => {
    

    return (
        <nav className='navbar-main-frame'>
            <div className="navbar-items">
                <p className='navbar-logo'>
                    Ayúdalos <Heart className='heart-icon'/>
                </p>
                <ul className="navbar-items-list">
                    <NavLink to={'/'} className="navbar-item">Inicio</NavLink> 
                    <NavLink to={'/'} className="navbar-item">Sobre Nosotros</NavLink> 
                    <NavLink to={'/'} className="navbar-item">Catálogo</NavLink> 
                    <NavLink to={'/'} className="navbar-item">Registro</NavLink> 
                </ul>
            </div>
        </nav>
    )
}
