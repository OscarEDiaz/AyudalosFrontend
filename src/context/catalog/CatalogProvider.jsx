import { useEffect, useState } from "react";
import { useGet } from "../../hooks/useGet";
import { CatalogContext } from "./CatalogContext";

export const CatalogProvider = ({ children }) => {
    const { data: initiatives, dataIsLoading: initiativesAreLoading, error: initiativesError } = useGet('/api/initiatives');

    const testInfo = [
        {
            initiativeTitle: 'Test 1',
            organizationName: 'OrgName Test 1',
            tags: ['tag1', 'tag2', 'tag3'],
            smallDescription: 'Small description for Test 1',
            detailedCard: {
                initiativeTitle: 'Test 1 Details',
                bigDescription: 'Detailed description for Test 1.'
            }
        },
        {
            initiativeTitle: 'Test 2',
            organizationName: 'OrgName Test 2',
            tags: ['tag4', 'tag5', 'tag6'],
            smallDescription: 'Small description for Test 2',
            detailedCard: {
                initiativeTitle: 'Test 2 Details',
                bigDescription: 'Detailed description for Test 2.'
            }
        },
        {
            initiativeTitle: 'Test 3',
            organizationName: 'OrgName Test 3',
            tags: ['tag7', 'tag8', 'tag9'],
            smallDescription: 'Small description for Test 3',
            detailedCard: {
                initiativeTitle: 'Test 3 Details',
                bigDescription: 'Detailed description for Test 3.'
            }
        }
    ];

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
                    testInfo,
                    filters,
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
