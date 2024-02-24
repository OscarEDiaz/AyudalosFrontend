import { useEffect, useState } from 'react';
import Dog from '../../../public/assets/icons/dog-solid.svg?react';
import Droplet from '../../../public/assets/icons/droplet-solid.svg?react';
import Tree from '../../../public/assets/icons/tree-solid.svg?react';
import Carrot from '../../../public/assets/icons/carrot-solid.svg?react';
import Seedling from '../../../public/assets/icons/seedling-solid.svg?react';
import Heart from '../../../public/assets/icons/heart-solid.svg?react';
import AngleDown from '../../../public/assets/icons/angle-down-solid.svg?react';

import '../../styles/about_page/mainAbout.css';

const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

export const MainAbout = ({ navbarSize }) => {
    const [icons, setIcons] = useState([<Dog />, <Carrot />, <Droplet />, <Tree />, <Seedling />, <Heart />]);
    const iconsSize = 60;
    const [key, setKey] = useState(false);

    const relocateIcons = (i) => {
        const min = (window.innerWidth / icons.length) * i;
        const max = (window.innerWidth / icons.length) * (i + 1);
        const difference = max - min;

        const random = Math.random();
        const leftOffset = Math.floor(random * difference) + min;

        const newSize = iconsSize * ((Math.random() * 3) + 1)

        const top = `-${Math.random() * 1000 + newSize}px`;
        const left = `${leftOffset}px`;
        const transform = `rotate(${(Math.floor(Math.random()) * 2 - 1) * 45}deg)`;
        const height = `${newSize}px`;
        const width = `${newSize}px`;
        const zIndex = Math.floor(Math.random() * 2);

        return {
            top,
            left,
            transform,
            height,
            width,
            zIndex
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIcons((oldIcons) => [...shuffle(oldIcons)]);
            setKey((prevKey) => !prevKey);
        }, 4000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section
            className='about-page-section-animated'
            style={{ 'height': `calc(100vh - ${navbarSize.height}px)` }}
        >
            <div 
                className="animation-bg"
                key={key}
            >
                {
                    icons.map((icon, i) => (
                        <div
                            key={i}
                            className='icon icon-animation'
                            style={relocateIcons(i)}
                        >
                            {icon}
                        </div>
                    ))
                }
            </div>
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
            <AngleDown className='angle-down-icon' />
        </section>
    )
}
