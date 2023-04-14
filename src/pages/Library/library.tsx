import { Container, ItemContainer, TopItems, Division, Your, InfoContainer, SeeAll, VideoContainer } from "./library.style";
import HistoryIcon from '../../assets/historico.png'
import UserIcon from '../../assets/leo.png'
import WatchLater from '../../assets/assistirmaistarde.png'
import Playlist from '../../assets/playlist.png'
import LikeIcon from '../../assets/like.png'
import Scissor from '../../assets/cut-with-scissors.png'
import VideoLibComponent from "../../components/videoLibraryComponent/videoLibComponent";

interface Iprops{
    openMenu: boolean
}

function Library({ openMenu }: Iprops){
    return(
        <>
        <Container>
            <ItemContainer>
                <TopItems>
                    <div>
                        <img src={HistoryIcon} alt="HistoryIcon"></img>
                        <span>Histórico</span>
                    </div>
                    <SeeAll>Ver tudo</SeeAll>
                </TopItems>
                <VideoContainer>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                </VideoContainer>
                <Division />

                <TopItems>
                    <div>
                        <img src={WatchLater} alt="Watch later icon" ></img>
                        <span>Assitir mais tarde</span>
                    </div>
                    <SeeAll>Ver tudo</SeeAll>
                </TopItems>
                <VideoContainer>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                </VideoContainer>
                <Division />

                <TopItems>
                    <div>
                        <img src={Playlist} alt="Playlist icon"></img>
                        <span>Playlists</span>
                    </div>
                    <SeeAll>Ver tudo</SeeAll>
                </TopItems>
                <VideoContainer>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                </VideoContainer>
                <Division />

                <TopItems>
                    <div>
                        <img src={LikeIcon} alt="Like icon"></img>
                        <span>Vídeos marcados com "Gostei"</span>
                    </div>
                    <SeeAll>Ver tudo</SeeAll>
                </TopItems>
                <VideoContainer>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                    <VideoLibComponent openMenu={openMenu}/>
                </VideoContainer>
                <Division />

                <TopItems>
                    <div style={{ display: "grid" }}>
                        <div style={{ margin: '10px 0' }}>
                            <img src={Scissor} alt="Scissor icon"></img>
                            <span>Seus clipes</span>
                        </div >
                        Crie clipes para compartilhar seus momentos favoritos. Esse tipo de conteúdo aparecerá aqui.
                    </div>
                    <SeeAll>Ver tudo</SeeAll>
                </TopItems>
            </ItemContainer>

            <Your>
                <img src={UserIcon} alt="User icon"></img>
                <span>LEOZIN</span>
                <Division />
                <InfoContainer>
                    <span>Inscrições</span>
                    <span>0</span>
                </InfoContainer>
                <Division />
                <InfoContainer>
                    <span>Envios</span>
                    <span>0</span>
                </InfoContainer>
                <Division />
                <InfoContainer>
                    <span>Marcações "Gostei"</span>
                    <span>0</span>
                </InfoContainer>
                <Division />
            </Your>
        </Container>
        </>
    )

}

export default Library