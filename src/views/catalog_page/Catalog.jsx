import { useContext } from "react";

import { IniciativeList, Iniciative } from "./index.js";

import { CatalogContext } from "../../context/catalog/CatalogContext.jsx";

export const Catalog = ({ navbarSize }) => {
    // TODO: fetch filter tags
    const filters = ['test', 'test', 'test'];
    const { testInfo:initiatives } = useContext(CatalogContext);

    return (
        <div className="catalog">
            <div className="side-section left" style={{ 'height': `calc(100vh - ${navbarSize.height}px)`}}>
                <IniciativeList initiatives={initiatives} filters={filters} />
            </div>
            <div className="side-section right" style={{ 'minHeight': `calc(100vh - ${navbarSize.height}px)`}}>
                <Iniciative />
            </div>
        </div>
    )
}
