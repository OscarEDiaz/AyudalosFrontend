import { useGet } from "../../hooks/useGet";
import { CatalogContext } from "./CatalogContext";

export const CatalogProvider = ({ children }) => {
    const { data:initiatives, dataIsLoading:initiativesAreLoading, error:initiativesError } = useGet('/getInitiatives');

    return (
        <CatalogContext.Provider
            value={
                {
                    initiatives,
                    initiativesAreLoading,
                    initiativesError
                }
            }
        >
            {children}
        </CatalogContext.Provider>
    )
}
