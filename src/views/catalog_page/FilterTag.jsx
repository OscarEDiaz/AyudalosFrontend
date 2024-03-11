import { useContext } from 'react';

import Cross from '../../../public/assets/icons/x-solid.svg?react';

import { CatalogContext } from '../../context/catalog/CatalogContext';

import '../../styles/catalog_page/filter.css';

export const FilterTag = ({ tagName }) => {
    const { clearFilter } = useContext(CatalogContext);
    
    const handleRemoveTag = () => {
        clearFilter(tagName);
    }

    return (
        <div className="filter-tag" onClick={ handleRemoveTag }>
            <p className="filter-tag-text">{tagName}</p>
            <Cross className='x-icon'/>
        </div>
    )
}
