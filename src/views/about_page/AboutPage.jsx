import { useContext, useEffect, useRef, useState } from 'react';

import { NavbarContext } from '../../context/navbar/NavbarContext';
import { WindowContext } from '../../context/window/WindowContext';

import AngleUp from '../../../public/assets/icons/angle-up-solid.svg?react'

import { Navbar } from '../../components/navbar/Navbar';
import { MainAbout, OrganizationPerks, DonorPerks } from './index.js';

import '../../styles/about_page/aboutPage.css';

export const AboutPage = () => {
    const [isDisabled, setIsDisabled] = useState(true);

    const { navbarSize } = useContext(NavbarContext);
    const { scrollY } = useContext(WindowContext);

    const upButton = useRef(null);

    useEffect(() => {
        if (scrollY > window.innerHeight) {
            upButton.current.classList.remove('fade-out');
            upButton.current.classList.add('fade-in');

            upButton.current.style.display = 'flex';
        } else {
            upButton.current.classList.remove('fade-in');
            upButton.current.classList.add('fade-out');
            
            upButton.current.style.display = 'none';
        }
    }, [scrollY])


    return (
        <div className="about-page-main-frame">
            <Navbar />
            <MainAbout navbarSize={navbarSize} scrollY={scrollY} />
            <div
                className="divisor"
                style={
                    {
                        'height': `${navbarSize.height}px`,
                        'width': `${navbarSize.width}px`,
                        'zIndex': 3,
                        'backgroundColor': '#fff'
                    }
                }
            >
            </div>
            <OrganizationPerks navbarSize={navbarSize} />
            <div
                className="divisor"
                style={
                    {
                        'height': `${navbarSize.height}px`,
                        'width': `${navbarSize.width}px`,
                        'zIndex': 3,
                        'backgroundColor': '#fff'
                    }
                }
            >
            </div>
            <DonorPerks navbarSize={navbarSize} />
            <button
                className="return"
                ref={upButton}
                style={{ 'top': `calc(100vh - 150px + ${scrollY}px)` }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <AngleUp className='angle-up-icon' />
            </button>
        </div>
    )
}
