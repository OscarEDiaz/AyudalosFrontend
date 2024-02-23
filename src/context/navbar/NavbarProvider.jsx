import { NavbarContext } from "./NavbarContext"

export const NavbarProvider = ({children}) => {
    return (
        <NavbarContext.Provider value={{}}>
            {children}
        </NavbarContext.Provider>
    )
}
