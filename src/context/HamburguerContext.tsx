import { createContext, useState } from 'react'

export const HamburguerContext = createContext({} as HamburguerContextProps)

interface HamburguerContextProps{
    openMenu: boolean
    setOpenMenu: (openMenu: boolean) => void
    openShortsContainer: boolean
    setOpenShortsContainer: (openShortsContainer: boolean) => void
}

interface HamburguerStoreProps{
    children: React.ReactNode
}


export const HamburguerStore = ({ children }: HamburguerStoreProps) => {
    const [openMenu, setOpenMenu] = useState(true)
    const [ openShortsContainer, setOpenShortsContainer ] = useState(false)
    return(
        <HamburguerContext.Provider 
        value = {{
        openMenu: openMenu,
        setOpenMenu: setOpenMenu,
        openShortsContainer: openShortsContainer,
        setOpenShortsContainer: setOpenShortsContainer
        }}
        >
            {children}
        </HamburguerContext.Provider>
        
    )

}