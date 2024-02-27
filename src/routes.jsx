import { AyudalosApp } from "./AyudalosApp";
import { ErrorPage } from "./components/error_page/ErrorPage";
import { AboutPage } from "./views/about_page/AboutPage";
import { CatalogPage } from "./views/catalog_page/CatalogPage";
import { LandingPage } from "./views/landing_page/LandingPage";
import { RegisterPage } from "./views/register_page/RegisterPage"

export const routes = [
    {
        path: '/',
        element: <AyudalosApp />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <LandingPage />
            },
            {
                path: '/catalog',
                element: <CatalogPage />
            },
            {
                path: '/about',
                element: <AboutPage />
            },
            {
                path:'/register',
                element: <RegisterPage />
            }
        ]
    }
]