import { ButtonContainer } from "../../components/header/header.style"
import { Container, Division, SeeAll, SubsTop, VideoContainer } from "./subscriptions.styles"
import ListIcon from '../../assets/list.png'
import GradeIcon from '../../assets/two-rows-and-three-columns-layout.png'
import VideoLibComponent from "../../components/libraryVideos/libraryVideos"

import UseHamburguerContext from "../../hook/useHamburguerContext"

function Subscriptions(){
    const VideoArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    const { openMenu} = UseHamburguerContext()

    return(
            <Container>
                <SubsTop>
                    <span>Hoje</span>
                    <div style={{ display: "flex", gap: '5px', alignItems: 'center'}}>
                        <SeeAll>Gerenciar</SeeAll>
                        <ButtonContainer><img src={GradeIcon} style={{ height: '18px'}} alt="Grade Icon"/></ButtonContainer>
                        <ButtonContainer><img src={ListIcon} style={{ height: '18px'}} alt="List Icon"/></ButtonContainer>
                    </div>
                </SubsTop>
                <VideoContainer>
                    {VideoArray.map((item) => (
                        <VideoLibComponent openMenu={openMenu} />
                    ))}
                </VideoContainer>
                <Division />
                <SubsTop style={{ display: "flex", justifyContent: 'flex-start' }}>
                    <span>Ontem</span>
                </SubsTop>
                <VideoContainer>
                    {VideoArray.map((item) => (
                        <VideoLibComponent openMenu={openMenu} />
                    ))}
                </VideoContainer>
            </Container>
    )
}

export default Subscriptions