import { useContext, useState } from "react"

import { FilterSelector } from "./FilterSelector";

import { CatalogContext } from "../../context/catalog/CatalogContext";

import '../../styles/catalog_page/filter.css';


export const Filter = () => {
    const { tags } = useContext(CatalogContext);
    const [isToggled, setIsToggled] = useState(false);

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
                        { tags.map((tag, i) => <FilterSelector key={i} tagName={tag.name} />) }
                    </div>
                </div>
            </div>
        </div>
    )
}
