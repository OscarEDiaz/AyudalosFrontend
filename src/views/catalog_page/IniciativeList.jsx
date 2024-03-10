import { Filter, FilterTag, IniciativeCard } from './index.js';

import '../../styles/catalog_page/iniciativeList.css';

export const IniciativeList = ({ initiatives, filters }) => {
    return (
        <div className="iniciative-list-main-frame">
            <Filter />
            <div className="filter-tags-container">
                { filters.map((tag, i) => <FilterTag key={i} tacag={tag} />) }
            </div>
            <div className="iniciative-cards-container">
                {
                    initiatives.map((data, i) => <IniciativeCard key={i} data={data} index={i} /> )
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
