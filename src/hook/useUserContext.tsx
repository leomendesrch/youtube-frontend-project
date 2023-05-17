import { useContext } from "react";
import { UserContext } from "../context/userContext";


export default function useUserContext() {
    const context = useContext(UserContext)

    if(UserContext === undefined){
        throw new Error('Não foi possivel utilizar esse contexto global')
    }
    
    return context
}