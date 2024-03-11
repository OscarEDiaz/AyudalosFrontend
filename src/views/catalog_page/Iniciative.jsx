import { useContext, useEffect, useState } from 'react'
import { CatalogContext } from '../../context/catalog/CatalogContext';

import { InitiativeRightCard, LoadingRightCard } from './index.js';

import '../../styles/catalog_page/iniciative.css';

export const Iniciative = () => {
    const { initiatives, selectedInitiativeIndex } = useContext(CatalogContext);
    const [cardData, setcardData] = useState(null);

    useEffect(() => {
        if (selectedInitiativeIndex > -1) setcardData(initiatives[selectedInitiativeIndex]);
        else setcardData(null);
    }, [selectedInitiativeIndex, initiatives])

    return cardData ? <InitiativeRightCard cardData={cardData} /> : <LoadingRightCard />;
}
