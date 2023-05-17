import { Container, LateralBarButton, LateralBarText, MusicIcon, ShortsVideoContainer, ShortsVideoLateralBar } from "./shorts.style";
import LikeIcon from '../../assets/like2.png'
import DislikeIcon from '../../assets/dislike.png'
import ComentIcon from '../../assets/coment.png'
import ShareIcon from '../../assets/share.png'
import LuffyIcon from '../../assets/luffyicon2.png'

function Shorts(){
    return(
        <>
            <Container>
                <ShortsVideoContainer>
                </ShortsVideoContainer>
                <ShortsVideoLateralBar>
                
                        <LateralBarButton>
                            <img src={LikeIcon} alt="like icon shorts"/>
                        </LateralBarButton>
                    
                    <LateralBarText>136 mil</LateralBarText>

                
                        <LateralBarButton>
                            <img src={DislikeIcon} alt="dislike icon shorts"/>
                        </LateralBarButton>
                    
                    <LateralBarText style={{ marginBottom: '20px' }}>Não Gostei</LateralBarText>

                
                        <LateralBarButton>
                            <img src={ComentIcon} alt="like icon shorts"/>
                        </LateralBarButton>
                    
                    <LateralBarText>923</LateralBarText>

                
                        <LateralBarButton>
                            <img src={ShareIcon} alt="like icon shorts"/>
                        </LateralBarButton>
                    
                    <LateralBarText style={{ marginBottom: '20px' }}>Compar tilhar</LateralBarText>
                
                        <LateralBarButton>
                            ...
                        </LateralBarButton>
                    
                    <MusicIcon src={LuffyIcon}/>
                </ShortsVideoLateralBar>
            </Container>
        </>
    )
}

export default Shorts