import { useState } from "react"

import { FilterSelector } from "./FilterSelector";

import '../../styles/catalog_page/filter.css';

export const Filter = () => {
    const [isToggled, setIsToggled] = useState(false)
    const test = [1,2,3,4];

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
                    <div className="filter-categories">
                        <button className="filter-selector">Categoría</button>
                        <button className="filter-selector">Organización</button>
                    </div>
                    <div className="filters">
                        { test.map((tagName, i) => <FilterSelector key={i} tagName={tagName} />) }
                    </div>
                </div>
            </div>
        </div>
    )
}
