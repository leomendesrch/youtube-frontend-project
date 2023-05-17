import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { VideosContext } from "../context/videosContext";


export default function useVideosContext() {
    const context = useContext(VideosContext)

    if(UserContext === undefined){
        throw new Error('Não foi possivel utilizar esse contexto global')
    }
    
    return context
}