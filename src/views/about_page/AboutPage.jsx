import { useContext } from 'react';

import { NavbarContext } from '../../context/navbar/NavbarContext';
import { Navbar } from '../../components/navbar/Navbar';
import { MainAbout, OrganizationPerks } from './index.js';

import '../../styles/about_page/aboutPage.css';
import { DonorPerks } from './DonorPerks';

export const AboutPage = () => {
    const { navbarSize } = useContext(NavbarContext);

    return (
        <div className="about-page-main-frame">
            <Navbar />
            <MainAbout navbarSize={navbarSize} />
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
        </div>
    )
}
