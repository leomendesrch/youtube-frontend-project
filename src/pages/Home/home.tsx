import CategoryBar from "../../components/categoryBar/categoryBar"
import HomeShorts from "../../components/shortsHome/homeShorts"
import TopShortsComponent from "../../components/topShorts/topShorts"
import VideoComponent from "../../components/videoComponent/videoComponent"
import DownArrowIcon from '../../assets/down-arrow.png'
import axios from "axios"
import moment from "moment"

import UseHamburguerContext from "../../hook/useHamburguerContext"

import { Container, Division, ShortContainerButton, TopicContainer, TopicText } from "./home.style"
import { ContainerShort } from "./home.style"
import { useEffect, useState } from "react"
import useCategoryBarContext from "../../hook/useCategoryBarContext"


interface Videos {
    id: string
    snippet: {
        title: string
        thumbnails: {
            high: {
                url: string
            }
            maxres: {
                url: string
            }
        }
        channelTitle: string
        publishedAt: string
    },
    statistics: {
        viewCount: string
    }
}

function Home(){
    const [videos, setVideos] = useState<Videos[]>([]);
    const { openMenu, openShortsContainer, setOpenShortsContainer} = UseHamburguerContext()
    const { categoryBarId } = useCategoryBarContext()

    const API_KEY = 'AIzaSyBpzFstmE-FtNvlS9OHgLA1NMEZI7tFh0s'
    
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&hl=pt_BR&maxResults=50&regionCode=br&videoCategoryId=${categoryBarId}&key=${API_KEY}`

    const first20Videos = videos.slice(0, 20)
    const second20Videos = videos.slice(20, 40)
    const third10Videos = videos.slice(40, 50)

    useEffect(() => {
        load()
    }, [categoryBarId])
    
    async function load() {
        try{
            const resposta = await axios.get(url)
            setVideos(resposta.data.items)
        } catch(error){
            console.log(error)
        }
    }

    function formatViewCount(viewCount: number): string {
        if(viewCount >= 1000000){
            return `${(viewCount / 1000000).toFixed(0)} mi visualizações`
        } else if(viewCount >= 1000){
            return `${(viewCount / 1000).toFixed(0)} mil visualizações`
        } else{
            return `${viewCount} visualizações`
        }
    }

    function getPublishedTime(publishedAt: string){
        const now = moment()
        const videoDate = moment(publishedAt)
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

     

    return(
        openMenu? 
        <div>
            <CategoryBar />
            <div style={{ marginTop: '55px' }}>
                <Container openMenu={openMenu} >
                    {
                        
                        first20Videos.map((video) => (
                            <VideoComponent
                            videoId={video.id}
                            title={video.snippet.title}
                            channelTitle={video.snippet.channelTitle.charAt(0).toUpperCase()}
                            thumbnails={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url}
                            channelName={video.snippet.channelTitle}
                            details={`${formatViewCount(Number(video.statistics.viewCount))} - ${getPublishedTime(video.snippet.publishedAt)}`}
                            />
                    ))}
                </Container> 

                <Division HomeDivision={true}/>
                <TopShortsComponent />
                <ContainerShort openShortsContainer={true}>
                        <HomeShorts/>
                </ContainerShort>

                <ContainerShort openShortsContainer={openShortsContainer}>
                        <HomeShorts/>
                </ContainerShort>

                <ShortContainerButton openShortsContainer={openShortsContainer} onClick={() => {setOpenShortsContainer(!openShortsContainer)}}>
                    <img src={DownArrowIcon} alt="Shorts Button Show more"/>
                </ShortContainerButton>
                <Division HomeDivision={false} style={{ marginBottom: '50px' }}/>

                <Container openMenu={openMenu}>
                    
                    {
                        second20Videos.map((video) => (

                            <VideoComponent
                            videoId={video.id} 
                            title={video.snippet.title}
                            channelTitle={video.snippet.channelTitle.charAt(0)}
                            thumbnails={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url}
                            channelName={video.snippet.channelTitle}
                            details={`${formatViewCount(Number(video.statistics.viewCount))} - ${getPublishedTime(video.snippet.publishedAt)}`}
                            />
                        ))
                    }
                </Container>
                <Division HomeDivision={true} />
                <TopicContainer>
                    <TopicText>Em Alta</TopicText>
                </TopicContainer>
                <Container openMenu={openMenu}>
                    {

                        third10Videos.map((video) => (
                            <VideoComponent
                            videoId={video.id} 
                            title={video.snippet.title}
                            channelTitle={video.snippet.channelTitle.charAt(0)}
                            thumbnails={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url}
                            channelName={video.snippet.channelTitle}
                            details={`${formatViewCount(Number(video.statistics.viewCount))} - ${getPublishedTime(video.snippet.publishedAt)}`}
                            />
                        ))
                    }
                </Container>
            </div>
        </div>
        :
        <div>
        <CategoryBar />
        <div style={{ marginTop: '55px' }}>
            <Container openMenu={openMenu}>
                {
                    first20Videos.map((video) => (
                        <VideoComponent
                        videoId={video.id} 
                        title={video.snippet.title}
                        channelTitle={video.snippet.channelTitle.charAt(0)}
                        thumbnails={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url}
                        channelName={video.snippet.channelTitle}
                        details={`${formatViewCount(Number(video.statistics.viewCount))} - ${getPublishedTime(video.snippet.publishedAt)}`}
                        />
                    ))
                }
            </Container>
            <Division HomeDivision={true}/>
            <TopShortsComponent />

            <ContainerShort openShortsContainer={true}>
                    <HomeShorts/>
            </ContainerShort>

            <ContainerShort openShortsContainer={openShortsContainer}>
                    <HomeShorts/>
            </ContainerShort>

            <ShortContainerButton openShortsContainer={openShortsContainer} onClick={() => {setOpenShortsContainer(!openShortsContainer)}}>
                <img src={DownArrowIcon} alt="Shorts Button Show more"/>
            </ShortContainerButton>
            <Division HomeDivision={false} style={{ marginBottom: '50px' }}/>
            
            <Container openMenu={openMenu}>
                {
                    second20Videos.map((video) => (
                        <VideoComponent
                        videoId={video.id} 
                        title={video.snippet.title}
                        channelTitle={video.snippet.channelTitle.charAt(0)}
                        thumbnails={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url}
                        channelName={video.snippet.channelTitle}
                        details={`${formatViewCount(Number(video.statistics.viewCount))} - ${getPublishedTime(video.snippet.publishedAt)}`}
                        />
                    ))
                }
            </Container>
            <Division HomeDivision={true}/>
            <TopicContainer>
                <TopicText>Ultimas Nóticias...</TopicText>
            </TopicContainer>
            <Container openMenu={openMenu}>
                {
                    third10Videos.map((video) => (
                        <VideoComponent
                        videoId={video.id}
                        title={video.snippet.title}
                        channelTitle={video.snippet.channelTitle.charAt(0)}
                        thumbnails={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url}
                        channelName={video.snippet.channelTitle}
                        details={`${formatViewCount(Number(video.statistics.viewCount))} - ${getPublishedTime(video.snippet.publishedAt)}`}
                        />
                    ))
                }
            </Container>
        </div>
        </div>
    )

}

export default Home