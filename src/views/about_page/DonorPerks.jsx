import Donation from '../../../public/assets/icons/circle-dollar-to-slot-solid.svg?react';
import MagnifyingGlass from '../../../public/assets/icons/magnifying-glass-solid.svg?react';
import Bookmark from '../../../public/assets/icons/bookmark-solid.svg?react';

import { NavLink } from 'react-router-dom';

import '../../styles/about_page/perks.css';

export const DonorPerks = ({ navbarSize }) => {
    return (
        <section 
            className="about-page-section-donate"
            style={{ 'height': `calc(100vh - ${navbarSize.height}px)`, 'width': '100%' }}
        >
            <div className="donate-perks-main-frame">
                <h1 className='donate-perks-h1'>Como <span className='text-gradient'>donador</span></h1>
                <div className="perks">
                    <div className="perk-card">
                        <Donation className='perk-icon' />
                        <h3 className='perk-h3'><span className='text-gradient'>Dona</span> a cualquier iniciativa</h3>
                    </div>
                    <div style={{ 'height': '2px', 'width': '20px', 'backgroundColor': '#D9D9D9' }} ></div>
                    <div className="perk-card">
                        <MagnifyingGlass className='perk-icon' />
                        <h3 className='perk-h3'><span className='text-gradient'>Buscar</span> iniciativas</h3>
                    </div>
                    <div style={{ 'height': '2px', 'width': '20px', 'backgroundColor': '#D9D9D9' }} ></div>
                    <div className="perk-card">
                        <Bookmark className='perk-icon' />
                        <h3 className='perk-h3'><span className='text-gradient'>Guardar</span> iniciativas</h3>
                    </div>
                </div>
                <NavLink to='/catalog' className='perk-link'>Dona ahora</NavLink>
            </div>
        </section>
    )
}
