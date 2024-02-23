import { AyudalosApp } from "./AyudalosApp";
import { ErrorPage } from "./components/error_page/ErrorPage";
import { AboutPage } from "./views/about_page/AboutPage";
import { CatalogPage } from "./views/catalog_page/CatalogPage";
import { LandingPage } from "./views/landing_page/LandingPage";

export const routes = [
    {
        path: '/',
        element: <AyudalosApp />,
        errorElement: <ErrorPage />,
        childre: [
            {
                path: '',
                element: <LandingPage />
            },
            {
                path: '/catalog',
                element: <CatalogPage />
            },
            {
                path: '/about',
                element: <AboutPage />
            }
        ]
    }
]