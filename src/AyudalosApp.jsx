import { Outlet } from 'react-router-dom'
import { NavbarProvider } from './context/navbar/NavbarProvider'

export const AyudalosApp = () => {
    return (
        <NavbarProvider>
            <Outlet />
        </NavbarProvider>
    )
}
