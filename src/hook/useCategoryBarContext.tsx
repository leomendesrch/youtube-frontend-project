import { useContext } from "react";
import { categoryBarContext } from "../context/categoryBarContext";


export default function useCategoryBarContext() {
    const context = useContext(categoryBarContext)

    if(categoryBarContext === undefined){
        throw new Error('Não foi possivel utilizar esse contexto global')
    }
    
    return context
}
