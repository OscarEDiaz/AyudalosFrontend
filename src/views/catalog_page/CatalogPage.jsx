import { useContext } from "react"

import { NavbarContext } from "../../context/navbar/NavbarContext";

import { Navbar } from "../../components/navbar/Navbar";
import { Catalog } from "./index.js";

import { CatalogProvider } from "../../context/catalog/CatalogProvider";

import '../../styles/catalog_page/catalogPage.css';

export const CatalogPage = () => {
    const { navbarSize } = useContext(NavbarContext);

    return (
        <div className="catalog-page-main-frame">
            <Navbar />
            <CatalogProvider>
                <Catalog navbarSize={navbarSize} />
            </CatalogProvider>
        </div>
    )
}
