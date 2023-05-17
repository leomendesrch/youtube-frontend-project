import { ChannelImage, Description, Statistics, Title, UserInfo, UserName, VideoCard, VideoImage, VideoInfoContainer } from "./searchVideos.style"

interface Videos{
    title: string
    channelTitle: string
    publishedAt: any
    thumbnails: string
    description: string
    videoId: string
}



function SearchVideos(props: Videos){
    return(
            <VideoCard onClick={() => window.open(`https://youtu.be/${props.videoId}`)}>
                <VideoImage src={props.thumbnails}/>
                <VideoInfoContainer>
                    <Title>{props.title}</Title>
                    <Statistics>1,5 mi de visualizações - há 5 meses</Statistics>
                    <UserInfo>
                        <ChannelImage>{props.channelTitle.charAt(0).toUpperCase()}</ChannelImage>
                        <UserName>{props.channelTitle}</UserName>
                    </UserInfo>
                    <Description>{props.description}</Description>
                </VideoInfoContainer>
            </VideoCard>  
    )
}

export default SearchVideos