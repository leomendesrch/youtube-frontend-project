import { createContext, useState } from 'react'

interface HamburguerContextProps{
    openMenu: boolean
    setOpenMenu: (openMenu: boolean) => void
}

interface HamburguerStoreProps{
    children: React.ReactNode
}
export const HamburguerContext = createContext({} as HamburguerContextProps)



export const HamburguerStore = ({ children }: HamburguerStoreProps) => {
    const [openMenu, setOpenMenu] = useState(true)
    return(
        <HamburguerContext.Provider value = {{ openMenu: openMenu, setOpenMenu: setOpenMenu }}>
            {children}
        </HamburguerContext.Provider>
    )

}