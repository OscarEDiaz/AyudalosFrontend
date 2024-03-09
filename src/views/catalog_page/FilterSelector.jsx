import '../../styles/catalog_page/filter.css';

export const FilterSelector = ({ tagName }) => {
    return (
        <div className="filter-tag">
            <p className="filter-tag-text">{tagName}</p>
        </div>
    )
}
