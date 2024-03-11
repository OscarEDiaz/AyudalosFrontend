import { useContext, useLayoutEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarContext } from '../../context/navbar/NavbarContext';

import Heart from '../../../public/assets/icons/heart-solid.svg?react';

import '../../styles/navbar/navbar.css';

export const Navbar = () => {
    const { customStyle, handleNavbarSizeChange } = useContext(NavbarContext);
    
    const navbar = useRef(null); 

    useLayoutEffect(() => {
        const {height, width} = navbar.current.getBoundingClientRect();

        handleNavbarSizeChange({height, width});
    }, [])

    return (
        <nav className='navbar-main-frame' style={customStyle} ref={navbar}>
            <div className="navbar-items">
                <p className='navbar-logo'>
                    Ayúdalos <Heart className='heart-icon' />
                </p>
                <ul className="navbar-items-list">
                    <NavLink
                        to={'/'}
                        className={({ isActive }) => `navbar-item ${isActive ? 'navbar-item-active' : ''}`}
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        to={'/about'}
                        className={({ isActive }) => `navbar-item ${isActive ? 'navbar-item-active' : ''}`}
                    >
                        Sobre Nosotros
                    </NavLink>
                    <NavLink
                        to={'/catalog'}
                        className={({ isActive }) => `navbar-item ${isActive ? 'navbar-item-active' : ''}`}
                    >
                        Catálogo
                    </NavLink>
                    <NavLink
                        to={'/register'}
                        className={({ isActive }) => `navbar-item ${isActive ? 'navbar-item-active' : ''}`}
                        onClick={(e) => e.preventDefault()}
                    >
                        Registro
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
