import Coins from '../../../public/assets/icons/coins-solid.svg?react';
import Newspaper from '../../../public/assets/icons/newspaper-solid.svg?react';
import Chart from '../../../public/assets/icons/chart-line-solid.svg?react';

import { NavLink } from 'react-router-dom';

import '../../styles/about_page/perks.css';

export const OrganizationPerks = ({ navbarSize }) => {
    return (
        <section 
            className="about-page-section-donate"
            style={{ 'height': `calc(100vh - ${navbarSize.height}px)`, 'width': '100%' }}
        >
            <div className="donate-perks-main-frame">
                <h1 className='donate-perks-h1'>Como <span className='text-gradient'>organizacion</span></h1>
                <div className="perks">
                    <div className="perk-card">
                        <Coins className='perk-icon' />
                        <h3 className='perk-h3'>Recibe <span className='text-gradient'>donaciones</span> directas</h3>
                    </div>
                    <div style={{ 'height': '2px', 'width': '20px', 'backgroundColor': '#D9D9D9' }} ></div>
                    <div className="perk-card">
                        <Newspaper className='perk-icon' />
                        <h3 className='perk-h3'><span className='text-gradient'>Publica</span> cualquier iniciativa</h3>
                    </div>
                    <div style={{ 'height': '2px', 'width': '20px', 'backgroundColor': '#D9D9D9' }} ></div>
                    <div className="perk-card">
                        <Chart className='perk-icon' />
                        <h3 className='perk-h3'><span className='text-gradient'>Maneja</span> todos tus datos</h3>
                    </div>
                </div>
                <NavLink to='/register' className='perk-link' >Registrate</NavLink>
            </div>
        </section>
    )
}
