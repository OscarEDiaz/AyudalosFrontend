import { useState } from "react"

import { FilterSelector } from "./FilterSelector";

import '../../styles/catalog_page/filter.css';

export const Filter = () => {
    const [isToggled, setIsToggled] = useState(false)
    const testFilters = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7', 'tag8', 'tag9']

    return (
        <div className="filter-main-frame">
            <div className="filter-header-wrapper">
                <h1 className='iniciative-list-h1'>Iniciativas</h1>
                <button 
                    className="filter-toggle"
                    onClick={ () => setIsToggled(!isToggled) }
                >Filtros</button>
            </div>
            <div className={`filter-panel-wrapper ${ isToggled ? 'show-filter-panel' : '' }`}>
                <div className='filter-panel'>
                    <div className="filters">
                        { testFilters.map((tagName, i) => <FilterSelector key={i} tagName={tagName} />) }
                    </div>
                </div>
            </div>
        </div>
    )
}
