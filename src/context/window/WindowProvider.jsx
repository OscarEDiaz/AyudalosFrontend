import { useEffect, useState } from "react"
import { WindowContext } from "./WindowContext";

export const WindowProvider = ({ children }) => {
    const [scrollY, setScrollY] = useState(0);

    const onWindowScroll = () => {
        const windowScrollY = window.scrollY;
        setScrollY(windowScrollY);
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
