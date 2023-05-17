import { Container, TextContainer, Title, TitleContainer, VideoBanner, VideoText } from './libraryVideos.style'

interface Iprops{
    openMenu: boolean
}

function PVideoComponent({ openMenu }: Iprops){
    return(
        <Container >
        <VideoBanner openMenu={openMenu}  src="https://i.ytimg.com/vi/8pC2-LvGDbY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcK2p9gjGP3304XRVlyNRR8zLElw"/>
            <TitleContainer>
                <TextContainer>
                    <Title>GEAR 5 LUFFY vs AWAKENED LUCCI</Title>
                    <VideoText>Leo Mendes</VideoText>
                    <VideoText>1 mi visualizações há 2 meses</VideoText>
                </TextContainer>
            </TitleContainer>
        </Container>
    )

}

export default PVideoComponent;
