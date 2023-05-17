import { useContext } from "react";
import { dropDownMenuContext } from "../context/dropDownMenuContext";


export default function useDropDownMenuContext() {
    const context = useContext(dropDownMenuContext)

    if(dropDownMenuContext === undefined){
        throw new Error('Não foi possivel utilizar esse contexto global')
    }
    
    return context
}