import { IniciativeList, Iniciative } from "./index.js";

export const Catalog = ({ navbarSize }) => {
    // TODO: fetch filter tags
    const filters = ['test', 'test', 'test'];
    const iniciatives = ['test', 'test', 'test', 'test', 'test', 'test'];
    
    return (
        <div className="catalog">
            <div className="side-section left" style={{ 'height': `calc(100vh - ${navbarSize.height}px)`}}>
                <IniciativeList  iniciatives={iniciatives} filters={filters} />
            </div>
            <div className="side-section right" style={{ 'minHeight': `calc(100vh - ${navbarSize.height}px)`}}>
                <Iniciative />
            </div>
        </div>
    )
}
