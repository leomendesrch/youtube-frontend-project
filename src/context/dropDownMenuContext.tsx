import { createContext, useState } from "react";

export const dropDownMenuContext = createContext({} as DropDownMenuContextProps)

interface DropDownMenuContextProps{
    dropDownMenu: boolean
    setDropDownMenu: (dropDownMenu: boolean) => void
}

interface DropDownMenuStoreProps{
    children: React.ReactNode
}


export function DropDownMenuStore({children}: DropDownMenuStoreProps){
    const [ dropDownMenu, setDropDownMenu] = useState(false)

    return(
        <dropDownMenuContext.Provider value={{dropDownMenu, setDropDownMenu}}>
            {children}
        </dropDownMenuContext.Provider>
    )
}