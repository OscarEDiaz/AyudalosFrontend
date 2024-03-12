import { useNavigate } from "react-router-dom";

import { Navbar } from '../../components/navbar/Navbar';
import Hand from '../../../public/assets/icons/hand-holding-heart-solid.svg?react';

import '../../styles/lading_page/landingPage.css';

export const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className='landing-page-main-frame'>
            <Navbar />
            <main className='hero-banner-main-frame'>
                <div className="hero-banner">
                    <div className="hero-banner-txt">
                        <h1 className='hero-banner-h1'>Un solo propósito: el cambio <span className='text-gradient'>Ayudalos</span> tranforma vidas</h1>
                        <Hand className='hand-icon' />
                    </div>
                    <button 
                        className="donate-btn"
                        onClick={() => navigate('/catalog')}
                    >¡Donar ahora!</button>
                </div>
            </main>
        </div>
    )
}