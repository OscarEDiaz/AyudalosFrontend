import Dog from '../../../public/assets/icons/dog-solid.svg?react';
import Droplet from '../../../public/assets/icons/droplet-solid.svg?react';
import Tree from '../../../public/assets/icons/tree-solid.svg?react';
import Carrot from '../../../public/assets/icons/carrot-solid.svg?react';
import Seedling from '../../../public/assets/icons/seedling-solid.svg?react';
import Heart from '../../../public/assets/icons/heart-solid.svg?react';

import { memo, useEffect, useState } from "react"

const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

export const Animation = memo(() => {
    const [icons, setIcons] = useState([<Dog />, <Carrot />, <Droplet />, <Tree />, <Seedling />, <Heart />]);
    const [key, setKey] = useState(false);

    const iconsSize = 60;

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
    )
})
