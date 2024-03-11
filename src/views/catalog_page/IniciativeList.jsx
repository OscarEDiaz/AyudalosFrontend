import { useContext, useEffect, useState } from 'react';

import { Filter, FilterTag, IniciativeCard } from './index.js';

import { CatalogContext } from '../../context/catalog/CatalogContext.jsx';

import '../../styles/catalog_page/iniciativeList.css';

export const IniciativeList = ({ initiatives }) => {
    const [currentInitiatives, setcurrentInitiatives] = useState([]);
    const { filters } = useContext(CatalogContext);

    useEffect(() => {
        if (filters.length > 0) {
            const filteredData = initiatives.filter((initiative) => {
                return initiative.tags.some(tag => filters.includes(tag.name));
            });                 

            setcurrentInitiatives(filteredData);
        } else {
            setcurrentInitiatives(initiatives);
        }
    }, [filters]);

    useEffect(() => {
        setcurrentInitiatives(initiatives);
    }, [initiatives]);

    return (
        <div className="iniciative-list-main-frame">
            <Filter />
            <div className="filter-tags-container">
                { filters.map((name, i) => <FilterTag key={i} tagName={name} />) }
            </div>
            <div className="iniciative-cards-container">
                {
                    currentInitiatives.map((data, i) => <IniciativeCard key={i} data={data} index={i} /> )
                }
                <div className="page-controller">
                    <button className="page-selector">Atras</button>
                    <p>Page</p>
                    <input  className='number-input' type="text" name="" id="" />
                    <p>/100</p>
                    <button className="page-selector">Adelante</button>
                </div>
            </div>
        </div>
    )
}
