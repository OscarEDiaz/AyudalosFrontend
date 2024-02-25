import { useState, useEffect } from "react"
import { WindowContext } from "./WindowContext"

export const WindowProvider = ({ children }) => {
    const [scrollY, setScrollY] = useState(0);

    const onWindowScroll = () => {
        let newScrollY = window.scrollY;

        setScrollY(newScrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', onWindowScroll);

        return () => {
            window.removeEventListener('scroll', onWindowScroll);
        }
    }, [])


    return (
        <WindowContext.Provider
            value={
                {
                    scrollY
                }
            }
        >
            {children}
        </WindowContext.Provider>
    )
}
