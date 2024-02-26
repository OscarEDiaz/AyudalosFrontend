import { useEffect, useRef, useState } from 'react';

import Heart from '../../../public/assets/icons/heart-solid.svg?react';
import AngleDown from '../../../public/assets/icons/angle-down-solid.svg?react';

import { Animation } from './Animation';

import '../../styles/about_page/mainAbout.css';


export const MainAbout = ({ navbarSize, scrollY }) => {
    const [fade, setFade] = useState(false);

    useEffect(() => {
        if (scrollY > navbarSize.height) {
            setFade(true);
        } else {
            setFade(false);
        }
    }, [scrollY])

    return (
        <section
            className='about-page-section-animated'
            style={{ 'height': `calc(100vh - ${navbarSize.height}px)` }}
        >
            <Animation />
            <div 
                className="about-header"
                style={{
                    'top': `calc(50% - ${navbarSize.height}px)`
                }}
            >
                <h1 className='about-header-h1' >Ayudalos <Heart className='heart-icon-aboutpage' /> es una organizacion sin</h1>
                <h1 className='about-header-h1' >fines de lucro que <span className='text-gradient'>centraliza</span> iniciativas de apoyo</h1>
                <h1 className='about-header-h1' >y facilita el proceso de <span className='text-gradient'>donaciones</span></h1>
            </div>
            <AngleDown className={`angle-down-icon ${ fade ? 'fade-out' : 'fade-in' }`} />
        </section>
    )
}
