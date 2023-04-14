import HomeHeader from "../../components/headerHome/headerHome"
import HomeShorts from "../../components/shortsHome/homeShorts"
import TopShortsComponent from "../../components/topShorts/topShorts"
import VideoComponent from "../../components/videoComponent/videoComponent"
import { Container, Division, ShortContainerButton, TopicContainer, TopicText } from "./home.style"
import { ContainerShort } from "./home.style"
import DownArrowIcon from '../../assets/down-arrow.png'

interface Iprops{
    openMenu: boolean
    openShortsContainer: boolean
    setOpenShortsContainer: (openShortsContainer: boolean) => void
}


function Home({ openMenu, openShortsContainer, setOpenShortsContainer }: Iprops){
    const openVideoArray = [0,1,2,3,4,5,6,7]
    const closedVideoArray = [0,1,2,3,4,5,6,7,8,9]

    const ShortsArray = [0,1,2,3,4,5,6,7]

    console.log(openMenu)
    return(
        openMenu?
        <div>
            <HomeHeader openMenu={openMenu}></HomeHeader>
            <div style={{ marginTop: '55px' }}>
                <Container openMenu={openMenu} >
                    {openVideoArray.map(() => (
                            <VideoComponent openMenu={openMenu} />
                        ))}
                </Container> 
                <Division HomeDivision={true}/>
                <TopShortsComponent />
                <ContainerShort openShortsContainer={true}>
                    {ShortsArray.map(() => (
                        <HomeShorts/>
                    ))}
                </ContainerShort>

                <ContainerShort openShortsContainer={openShortsContainer}>
                    {ShortsArray.map(() => (
                        <HomeShorts/>
                    ))}
                </ContainerShort>

                <ShortContainerButton openShortsContainer={openShortsContainer} onClick={() => {setOpenShortsContainer(!openShortsContainer)}}>
                    <img src={DownArrowIcon} alt="Shorts Button Show more"/>
                </ShortContainerButton>
                <Division HomeDivision={false} style={{ marginBottom: '50px' }}/>
                <Container openMenu={openMenu}>
                    {openVideoArray.map(() => (
                            <VideoComponent openMenu={openMenu} />
                        ))}
                </Container>
                <Division HomeDivision={true} />
                <TopicContainer>
                    <TopicText>Em Alta</TopicText>
                </TopicContainer>
                <Container openMenu={openMenu}>
                    {openVideoArray.map(() => (
                            <VideoComponent openMenu={openMenu} />
                        ))}
                </Container>
            </div>
        </div>
        :
        <div>
        <HomeHeader openMenu={openMenu}></HomeHeader>
            <div style={{ marginTop: '55px' }}>
                <Container openMenu={openMenu}>
                    {closedVideoArray.map(() => (
                        <VideoComponent openMenu={openMenu}/>
                    ))}
                </Container>
                <Division HomeDivision={true}/>
                <TopShortsComponent />

                <ContainerShort openShortsContainer={true}>
                    {ShortsArray.map(() => (
                        <HomeShorts/>
                    ))}
                </ContainerShort>

                <ContainerShort openShortsContainer={openShortsContainer}>
                    {ShortsArray.map(() => (
                        <HomeShorts/>
                    ))}
                </ContainerShort>

                <ShortContainerButton openShortsContainer={openShortsContainer} onClick={() => {setOpenShortsContainer(!openShortsContainer)}}>
                    <img src={DownArrowIcon} alt="Shorts Button Show more"/>
                </ShortContainerButton>
                <Division HomeDivision={false} style={{ marginBottom: '50px' }}/>
                
                <Container openMenu={openMenu}>
                    {closedVideoArray.map(() => (
                        <VideoComponent openMenu={openMenu}/>
                    ))}
                </Container>
                <Division HomeDivision={true}/>
                <TopicContainer>
                    <TopicText>Ultimas Nóticias...</TopicText>
                </TopicContainer>
                <Container openMenu={openMenu}>
                    {closedVideoArray.map(() => (
                        <VideoComponent openMenu={openMenu}/>
                    ))}
                </Container>
            </div>
        </div>
    )

}

export default Home