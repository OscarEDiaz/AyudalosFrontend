import { useContext, useEffect, useState } from 'react'
import { CatalogContext } from '../../context/catalog/CatalogContext';

import { InitiativeRightCard, LoadingRightCard } from './index.js';

import '../../styles/catalog_page/iniciative.css';

export const Iniciative = () => {
    const { testInfo, selectedInitiativeIndex } = useContext(CatalogContext);
    const [cardData, setcardData] = useState(null);

    useEffect(() => {
        if (selectedInitiativeIndex > -1) setcardData(testInfo[selectedInitiativeIndex]);
        else setcardData(null);
    }, [selectedInitiativeIndex])

    return cardData ? <InitiativeRightCard cardData={cardData} /> : <LoadingRightCard />;
}
