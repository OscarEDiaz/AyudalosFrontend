import Cross from '../../../public/assets/icons/x-solid.svg?react';

import '../../styles/catalog_page/filter.css';

export const FilterTag = ({ tagName }) => {
    return (
        <div className="filter-tag">
            <p className="filter-tag-text">{tagName}</p>
            <Cross className='x-icon' />
        </div>
    )
}
