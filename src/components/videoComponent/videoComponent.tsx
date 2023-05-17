import { ChannelImage, ChannelImageContainer, Container, TextContainer, Title, TitleContainer, VideoBanner, VideoText } from "./videoComponent.style";


interface Iprops{
    title: string
    channelTitle: string
    thumbnails: string
    channelName: string
    details: string
    videoId: string
}

const backgroundChannelColors = [
    '#c58383',
    '#8d8df4',
    '#6ab46a',
    '#a5a591',
    '#ffd382',
    '#b687b6',
    '#9e9e9e'
]

const randomBackGroundColor = () => backgroundChannelColors[Math.floor(Math.random() * backgroundChannelColors.length)];

function VideoComponent(props: Iprops){

    return(
            <Container onClick={() => window.open(`https://youtu.be/${props.videoId}`)}>
                <VideoBanner src={props.thumbnails}/>
                <TitleContainer>
                    <ChannelImageContainer>
                        <ChannelImage style={{backgroundColor: randomBackGroundColor()}}>{props.channelTitle}</ChannelImage>
                    </ChannelImageContainer>
                    <TextContainer>
                        <Title>{props.title}</Title>
                        <VideoText>{props.channelName}</VideoText>
                        <VideoText>{props.details}</VideoText>
                    </TextContainer>
                </TitleContainer>
            </Container>
    )

}

export default VideoComponent;
