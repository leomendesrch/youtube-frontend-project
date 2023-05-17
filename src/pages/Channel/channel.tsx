import { ButtonContainer, ChannelDivisionImage, ChannelDivisionText, ChannelPageContainer, CreateVideoButton, Division, UserBanner, UserContainer, UserDescription, UserId, UserImage, UserInfo, UserName, Video,  } from "./channel.style"
import { VideosContainer } from "./channel.style"

import YoutubeIcon from '../../assets/youtube.png'
import YourVideos from "../../components/yourVideos/yourVideos"
import Modal from "../../components/createVideoModal/createVideoModal"

import { useEffect, useState } from "react"
import moment from "moment"
import useUserContext from "../../hook/useUserContext"
import useVideosContext from "../../hook/useVideosContext"

interface Iprops{
    title: string,
    description: string,
    banner: string,
    publishedAt: any,
    diff: string
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

function ChannelPage(){
    const [isOpen, setIsOpen] = useState(false)
    const { login, userName, user_id, token} = useUserContext()
    const { GetVideos, userVideos } = useVideosContext()

    useEffect(() => {
        GetVideos(user_id, token)
    }, [user_id, token])
    
    
    return(
        login?
        <ChannelPageContainer>
            <UserBanner src='https://versohydraulic.com/bitrix/templates/aspro-allcorp/images/background.png'/>
            <UserContainer>
                <UserImage>{userName.charAt(0).toUpperCase()}</UserImage>
                <UserInfo>
                        <UserName>{userName}</UserName>
                        <UserId>@{user_id}</UserId>
                     <UserDescription>
                        Descrição
                    </UserDescription> 
                </UserInfo>
            </UserContainer>
            <ButtonContainer>
                <CreateVideoButton onClick={() => {setIsOpen(true)}}>Criar Video</CreateVideoButton>
            </ButtonContainer>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Division>
                <ChannelDivisionImage src={YoutubeIcon}/>
                <ChannelDivisionText>Seus Vídeos</ChannelDivisionText>
            </Division>
            <VideosContainer>
                <Video>
                    {userVideos.map((video: Iprops, index: number) => (
                        <YourVideos 
                        title={video.title}
                        description={video.description}
                        publishedAt={getDate(video.publishedAt)}
                        banner={video.banner}
                        /> 
                        ))}
                </Video>
            </VideosContainer>
        </ChannelPageContainer>
        :
        null
    )
}

export default ChannelPage