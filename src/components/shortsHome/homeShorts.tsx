import { ShortContainer, ShortImage, ShortTextContainer, ShortVideoText, ShortVideoTextInfo} from "./homeShorts.styles"

const shortVideos = [
    {image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSswaR4G0RlSX7dRuKFViEhJDBAYzWVHQ6IKRBn4UbcPdiqZ4Sk', 
    videoText: 'Monkey D. Luffy 2022 Shorts', 
    videoInfo: '1,4 mi visualizações'},
    {image: 'https://i.ytimg.com/vi_webp/MMCWCmum3vg/oar2.webp', videoText: 'PING +999 🚪🤣', videoInfo: '9,8 mi de visualizações'},
    {image: 'https://i.ytimg.com/vi/6OP24jBtBjM/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDeqNTKt-SGMP1FOh1aacbIhdQgxQ', videoText: 'Diário de um lobo castrado', videoInfo: '1,9 mi de visualizações'},
    {image: 'https://i.ytimg.com/vi/7R-aZfdHwMs/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLB7kfqU-9sq0w_rPp8Jz-ibJqUMLQ', videoText: 'Quando é o ultimo pedaço', videoInfo: '15 mi visualizações'},
    {image: 'https://i.ytimg.com/vi/680X2W5vgvg/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLC3-cP16MsZhy7a7GJGc9fymvti6A', videoText: 'FIZ CACHORRO QUENTE DE ESCOLA', videoInfo: '9,3 mi visualizações'},
    {image: 'https://i.ytimg.com/vi/rYKfBV5VoME/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLA54sOSUBdinG6d2Nw1Fn7LM-ulpQ', videoText: 'the jordan poole effect', videoInfo: '13 mi visualizações'},
    {image: 'https://i.ytimg.com/vi/2GoRj31aTpg/oar2.jpg?sqp=-oaymwEaCJQDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLAkJp7WiofuaLZXf8hHlnzYB_3d3w', videoText: 'Categoria para dirigir carro mais trailer', videoInfo: '257 mil visualizações'},
    {image: 'https://i.ytimg.com/vi/aGRxcauBr9I/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDg4l7Qq4d_MNaILyJtxiD390Zrhw', videoText: 'TUTORIAL DE COMO BEIJAR O FAFA', videoInfo: '6,5 mi de visualizações'},
]

function HomeShorts(){
    return(
        <>
            {shortVideos.map((shortVideo) => (
                <ShortContainer>
                    <ShortImage src={shortVideo.image}/>
                    <ShortTextContainer>
                        <ShortVideoText>{shortVideo.videoText}</ShortVideoText>
                        <ShortVideoTextInfo>{shortVideo.videoInfo}</ShortVideoTextInfo>
                    </ShortTextContainer>
                </ShortContainer>
            ))}       
        </>
    )
}

export default HomeShorts