import { useEffect, useState } from "react"
import { CatalogContext } from "./CatalogContext";

export const CatalogProvider = ({ children }) => {
    const [filters, setFilters] = useState([]);
    const [filtersAreLoading, setFiltersAreLoading] = useState(true);
    const [iniciatives, setIniciatives] = useState([]);
    const [iniciativesAreLoading, setIniciativesAreLoading] = useState(true);


    useEffect(() => {

        return () => {

        }
    }, [])


    return (
        <CatalogContext.Provider
            value={
                {
                    filters,
                    filtersAreLoading,
                    iniciatives,
                    iniciativesAreLoading
                }
            }
        >
            {children}
        </CatalogContext.Provider>
    )
}
