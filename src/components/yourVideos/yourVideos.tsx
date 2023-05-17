import useUserContext from '../../hook/useUserContext'
import useVideosContext from '../../hook/useVideosContext'
import { Container, TextContainer, Title, TitleContainer, VideoBanner, VideoText } from './yourVideos.style'

interface Iprops{
    title: string,
    description: string,
    banner: string,
    publishedAt: any
}

function YourVideos(props: Iprops){
    const { userName } = useUserContext()
    return(
        <Container>
                <Container >
                <VideoBanner src={props.banner}/>
                    <TitleContainer>
                        <TextContainer>
                            <Title>{props.title}</Title>
                            <VideoText>{userName}</VideoText>
                            <VideoText>{props.publishedAt}</VideoText>
                        </TextContainer>
                    </TitleContainer>
                </Container>
        </Container>
    )
}

export default YourVideos