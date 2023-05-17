import { useContext } from 'react'
import { HamburguerContext } from '../context/hamburguerContext'

function UseHamburguerContext(){
    const context = useContext(HamburguerContext)

    if(context === undefined){
        console.log('a cabeça chega a endoidia')
    }

    return(context)
}

export default UseHamburguerContext