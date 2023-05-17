import axios from "axios"
import SearchVideos from "../../components/searchVideos/searchVideos"
import useVideosContext from "../../hook/useVideosContext"
import { Container } from "./search.style"
import { useEffect, useState } from "react"
import moment from "moment"

interface Videos{
    id: {
        videoId: string
    }
    snippet:{
        title: string
        channelTitle: string
        publishedAt: any
        thumbnails: {
            high:{
                url: string
            }
        }
        description: string
    }
}

function getDate(date2: string){
    const now = moment()
    const videoDate = moment(date2)
    const diff = now.diff(videoDate)

    const intMinutos = Math.floor(moment.duration(diff).asMinutes())
    const intHoras = Math.floor(moment.duration(diff).asHours())
    const intDias = Math.floor(moment.duration(diff).asDays())
    const intSemanas = Math.floor(moment.duration(diff).asWeeks())
    const intMeses = Math.floor(moment.duration(diff).asMonths())
    const intAnos = Math.floor(moment.duration(diff).asYears())

    if(intMinutos < 1) return 'Agora'
    if(intMinutos === 1) {return `há 1 minuto`} else if(intMinutos <= 59) return `há ${intMinutos} minutos`
    if(intHoras === 1) {return `há 1 hora`} else if(intHoras <= 24) return `há ${intHoras} horas`
    if(intDias === 1) {return `há 1 dia`} else if(intDias <= 30) return `há ${intDias} dias`
    if(intSemanas === 1) {return `há 1 semana`} else if(intSemanas <= 6) return `há ${intSemanas} semanas`
    if(intMeses === 1) {return `há 1 mês`} else if(intMeses <= 12) return `há ${intMeses} meses` 
    if(intAnos === 1) {return `há 1 ano`} else if(intAnos <= 1000) return `há ${intAnos} anos` 
}



function SearchPage(){
    const { searchValue } = useVideosContext()
    const [searchVideos, setSearchVideos] = useState<Videos[]>([])
    const API_KEY = 'AIzaSyBpzFstmE-FtNvlS9OHgLA1NMEZI7tFh0s'
    const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=relevance&q=${searchValue}&key=${API_KEY}`


    async function VideoRequest(){
        try{
            const resposta = await axios.get(URL)
            setSearchVideos(resposta.data.items)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        VideoRequest()
    }, [searchValue])
    
    
    return(
        <Container>
            {searchVideos.map((video: Videos) => (
                <SearchVideos 
                title={video.snippet.title}
                channelTitle={video.snippet.channelTitle}
                publishedAt={getDate(video.snippet.publishedAt)}
                thumbnails={video.snippet.thumbnails.high.url}
                description={video.snippet.description}
                videoId={video.id.videoId}
                />
            ))}
        </Container>
    )
}

export default SearchPage