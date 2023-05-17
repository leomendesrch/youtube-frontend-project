import { createContext, useState } from "react";

export const categoryBarContext = createContext({} as categoryBarContextProps)

interface categoryBarContextProps{
    categoryBarId: number
    setCategoryBarId: (categoryBar: number) => void
}

interface categoryBarStoreProps{
    children: React.ReactNode
}


export function CategoryBarStore({children}: categoryBarStoreProps){
    const [ categoryBarId, setCategoryBarId] = useState(0)

    return(
        <categoryBarContext.Provider value={{categoryBarId, setCategoryBarId}}>
            {children}
        </categoryBarContext.Provider>
    )
}