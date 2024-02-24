import { useContext } from 'react';

import { NavbarContext } from '../../context/navbar/NavbarContext';
import { Navbar } from '../../components/navbar/Navbar';
import { MainAbout } from './MainAbout';

import '../../styles/about_page/aboutPage.css';
import { DonateAbout } from './DonateAbout';

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
                        'backgroundColor': '#fff'
                    }
                }
            >
            </div>
            <DonateAbout navbarSize={navbarSize} />
        </div>
    )
}
