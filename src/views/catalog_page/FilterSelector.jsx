import { useContext, useEffect, useState } from 'react';

import { CatalogContext } from '../../context/catalog/CatalogContext';

import '../../styles/catalog_page/filter.css';

export const FilterSelector = ({ tagName }) => {
    const [isToggled, setIsToggled] = useState(false);
    const { addFilter, clearFilter, filters } = useContext(CatalogContext);

    const handleFilterClicked = () => {
        if (!isToggled) {
            addFilter(tagName);
        } else {
            clearFilter(tagName);
        }

        setIsToggled(!isToggled);
    };

    useEffect(() => {
        if (!filters.find((currentTag) => currentTag === tagName)) setIsToggled(false);
    }, [filters])


    return (
        <div
            className={`filter-tag ${isToggled ? 'selected' : ''}`}
            onClick={handleFilterClicked}
        >
            <p
                className="filter-tag-text"
                style={{ 'color': isToggled ? '#fff' : '' }}
            >{tagName}</p>
        </div>
    )
}
