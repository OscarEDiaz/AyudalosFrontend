import { Outlet } from 'react-router-dom'
import { NavbarProvider } from './context/navbar/NavbarProvider'
import { WindowProvider } from './context/window/WindowProvider'

export const AyudalosApp = () => {
    return (
        <WindowProvider>
            <NavbarProvider>
                <Outlet />
            </NavbarProvider>
        </WindowProvider>
    )
}
