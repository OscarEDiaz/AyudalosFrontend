import { useState } from "react"
import { NavbarContext } from "./NavbarContext"

export const NavbarProvider = ({children}) => {
    const [customStyle, setCustomStyle] = useState({});
    const [navbarSize, setNavbarSize] = useState({});

    const handleStyleChange = (style) => {
        setCustomStyle(style);
    }

    const handleNavbarSizeChange = (size) => {
        setNavbarSize(size);
    }

    return (
        <NavbarContext.Provider 
            value={
                {
                    customStyle,
                    handleStyleChange,
                    navbarSize,
                    handleNavbarSizeChange,
                }
            }
        >
            {children}
        </NavbarContext.Provider>
    )
}
