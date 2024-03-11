import { useEffect, useState } from "react";
import { useGet } from "../../hooks/useGet";
import { CatalogContext } from "./CatalogContext";

export const CatalogProvider = ({ children }) => {
    const { data: initiatives, dataIsLoading: initiativesAreLoading, error:initiativesError } = useGet('/api/initiatives');
    const { data: tags, dataIsLoading: tagsAreLoading, error: tagsError } = useGet('/api/tags');

    // Handle wich initiative is displayed to the right
    const [selectedInitiativeIndex, setSelectedInitiativeIndex] = useState(0);

    // Handle current filter for filters
    const [filters, setFilters] = useState([]);

    const changeDisplayedInitiative = (id) => {
        setSelectedInitiativeIndex(id);
    };

    const addFilter = (filter) => {
        if (filter != '') setFilters([...filters, filter]);
    };

    const clearFilter = (filter) => {
        const clearedData = filters.filter((currentFilter) => filter !== currentFilter);

        setFilters(clearedData);
    }

    return (
        <CatalogContext.Provider
            value={
                {
                    initiatives,
                    initiativesAreLoading,
                    initiativesError,
                    selectedInitiativeIndex,
                    filters,
                    tags,
                    changeDisplayedInitiative,
                    addFilter,
                    clearFilter
                }
            }
        >
            {children}
        </CatalogContext.Provider>
    )
}
