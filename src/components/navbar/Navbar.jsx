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
                    <NavLink 
                        to={'/'} 
                        className={({isActive}) => `navbar-item ${isActive ? 'navbar-item-active' : ''}`} 
                    >Inicio</NavLink> 
                    <NavLink 
                        to={'/informacion'} 
                        className={({isActive}) => `navbar-item ${isActive ? 'navbar-item-active' : ''}`} 
                    >Sobre Nosotros</NavLink> 
                    <NavLink 
                        to={'/catalogo'} 
                        className={({isActive}) => `navbar-item ${isActive ? 'navbar-item-active' : ''}`} 
                    >Catálogo</NavLink> 
                    <NavLink 
                        to={'/registro'} 
                        className={({isActive}) => `navbar-item ${isActive ? 'navbar-item-active' : ''}`} 
                    >Registro</NavLink> 
                </ul>
            </div>
        </nav>
    )
}
