import { Container, Division, MenuItem, ButtonIcon, Footer, LoginButtonContainer } from './menu.style'
import HomeIcon from '../../assets/botao-de-inicio.png'
import ShortsIcon from '../../assets/short.png'
import SubscripteIcon from '../../assets/subscribe.png'
import BibliotecaIcon from '../../assets/biblioteca-de-videos.png'
import HistoryIcon from '../../assets/historico.png'
import VideoIcon from '../../assets/youtube.png'
import WatchLaterIcon from '../../assets/assistirmaistarde.png'
import LikeIcon from '../../assets/like.png'
import SeeMore from '../../assets/mostrarmais.png'
import FrontBeginnersIcon from '../../assets/channel.png'
import FireIcon from '../../assets/fire.png'
import BagIcon from '../../assets/bag.png'
import MusicIcon from '../../assets/musical-note.png'
import FilmIcon from '../../assets/claquete.png'
import LiveIcon from '../../assets/transmissao-ao-vivo.png'
import GameIcon from '../../assets/controle-de-jogo.png'
import NewsIcon from '../../assets/noticia.png'
import EsportIcon from '../../assets/trofeu.png'
import LampIcon from '../../assets/lampada.png'
import YTIcon from '../../assets/YT.png'
import YTStudioIcon from '../../assets/setting.png'
import YTKidsIcon from '../../assets/youtubekids.png'
import YTCircleIcon from '../../assets/circle.png'
import ConfigIcon from '../../assets/settings.png'
import ComplaintIcon from '../../assets/flags.png'
import HelpIcon from '../../assets/question.png'
import FeedbackIcon from '../../assets/feedback.png'
import UserIcon from '../../assets/user.png'

import { useNavigate } from 'react-router-dom'
import UseHamburguerContext from '../../hook/useHamburguerContext'
import { UserContext } from '../../context/userContext'
import { useContext } from 'react'

const closedMenuItem = [{ name: 'Início', src: HomeIcon, link: '/' }, {name: 'Shorts', src: ShortsIcon, link: '/shorts'}, {name: 'Inscrições', src: SubscripteIcon, link: '/subscriptions'}, {name: 'Biblioteca', src: BibliotecaIcon, link: '/library'}]
const openMenuItems = [
        {name: 'Início', src: HomeIcon, link: '/' },
        {name: 'Shorts', src: ShortsIcon, link: '/shorts' },
        {name: 'Inscrições', src: SubscripteIcon, link: '/subscriptions' }
]
const openMenuItemsDiv2 = [
        {name: 'Biblioteca', src: BibliotecaIcon, link: '/library' },
        {name: 'Seus Vídeos', src: VideoIcon, link: '/channel' },
        {name: 'Histórico', src: HistoryIcon, link: '/history' },
        {name: 'Assistir mais tarde', src: WatchLaterIcon, link: '/' },
        {name: 'Videos marcados c...', src: LikeIcon, link: '/' },
        {name: 'Mostrar mais', src: SeeMore, link: '/' }
]
const openMenuItemsDiv3 = [
    {name: 'Front Beginners', src: FrontBeginnersIcon, link: '/'  },
    {name: 'Front Beginners', src: FrontBeginnersIcon, link: '/'  },
    {name: 'Front Beginners', src: FrontBeginnersIcon, link: '/'  },
    {name: 'Front Beginners', src: FrontBeginnersIcon, link: '/'  },
    {name: 'Front Beginners', src: FrontBeginnersIcon, link: '/'  },
    {name: 'Front Beginners', src: FrontBeginnersIcon, link: '/'  },
    {name: 'Front Beginners', src: FrontBeginnersIcon, link: '/'  },
    {name: 'Mostrar mais', src: SeeMore, link: '/'}
]
const openMenuItemsDiv4 = [
    {name: 'Em alta', src: FireIcon, link: '/' },
    {name: 'Shopping', src: BagIcon, link: '/' },
    {name: 'Música', src: MusicIcon, link: '/' },
    {name: 'Filmes', src: FilmIcon, link: '/' },
    {name: 'Ao vivo', src: LiveIcon, link: '/' },
    {name: 'Jogos', src: GameIcon, link: '/' },
    {name: 'Nóticias', src: NewsIcon, link: '/' },
    {name: 'Esportes', src: EsportIcon, link: '/' },
    {name: 'Aprender', src: LampIcon, link: '/' },
]
const openMenuItemsDiv5 = [
    {name: 'Youtube Premium', src: YTIcon, link: '/' },
    {name: 'Youtube Studio', src: YTStudioIcon, link: '/' },
    {name: 'Youtube Music', src: YTCircleIcon, link: '/' },
    {name: 'Youtube Kids', src: YTKidsIcon, link: '/' }
]
const openMenuItemsDiv6 = [
    {name: 'Configurações', src: ConfigIcon, link: '/' },
    {name: 'Histórico de denún...', src: ComplaintIcon, link: '/' },
    {name: 'Ajuda', src: HelpIcon, link: '/' },
    {name: 'Enviar feedback', src: FeedbackIcon, link: '/' }
]


function Menu(){
    const MyGitHub = 'https://github.com/leomendesrch'
    const navigate = useNavigate()

    const { openMenu} = UseHamburguerContext()
    const { login } = useContext(UserContext)

    return(
        openMenu? 
        <Container openMenu={openMenu}>
            {openMenuItems.map((item, index) => (
                <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)} >
                    <ButtonIcon src={item.src} />
                    <span>{item.name}</span>
                </MenuItem>
            ))}

            <Division openMenu={openMenu}/>
            {openMenuItemsDiv2.map((item, index) => (
                <MenuItem  openMenu={openMenu} onClick={() => navigate(item.link)} >
                    <ButtonIcon src={item.src} />
                    <span>{item.name}</span>
                </MenuItem>
            ))}

            <Division openMenu={openMenu}/>

            {login?
            <>
            <span style={{ marginLeft: '-100px', marginBottom: '8px', fontWeight: '400', fontSize: '17px' }}>Inscrições</span>
            {openMenuItemsDiv3.map((item) => (
                 <MenuItem  openMenu={openMenu} onClick={() => navigate(item.link)} >
                     <ButtonIcon src={item.src} style={{ borderRadius: '50%' }}/>
                     <span>{item.name}</span>
                 </MenuItem>
             ))}
             </>
            :
            <div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center', marginLeft: '10px' }}>
            Faça login para curtir vídeos, comentar e se inscrever.
            <LoginButtonContainer onClick={() =>  navigate('/login')}>
                    <img  style={{ height: '18px' }} src={UserIcon} alt="login button"/>
                    Fazer login
                </LoginButtonContainer>
            </div>

            }



            
            <Division openMenu={openMenu}/>
            <span style={{ marginLeft: '-110px', marginBottom: '8px', fontWeight: '400', fontSize: '17px' }}>Explorar</span>
            {openMenuItemsDiv4.map((item) => (
                <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                    <ButtonIcon src={item.src} />
                    <span>{item.name}</span>
                </MenuItem>
            ))}

            <Division openMenu={openMenu}/>
            <span style={{ marginLeft: '-42px', marginBottom: '8px', fontWeight: '400', fontSize: '17px' }}>Mais do youtube</span>
            {openMenuItemsDiv5.map((item) => (
                <MenuItem onClick={() => navigate(item.link)} openMenu={openMenu} >
                    <ButtonIcon src={item.src} />
                    <span>{item.name}</span>
                </MenuItem>
            ))}

            <Division openMenu={openMenu}/>
            {openMenuItemsDiv6.map((item) => (
                <MenuItem onClick={() => navigate(item.link)} openMenu={openMenu} >
                    <ButtonIcon src={item.src} />
                    <span>{item.name}</span>
                </MenuItem>
            ))}
            <Division openMenu={openMenu}/>
            <Footer>
                <div style={{ display: 'flex'}}><a href={MyGitHub}>Sobre</a><a href={MyGitHub}>Imprensa</a></div>
                <a href={MyGitHub}>Direitos autorais</a>
                <a href={MyGitHub}>Entre em contato</a>
                <a href={MyGitHub}>Criadores de conteúdo</a>
                <div style={{ display: 'flex', marginBottom: '13px' }}><a href={MyGitHub}>Publicidade</a><a href={MyGitHub}>Desenvolvedores</a></div>
                <div style={{ display: 'flex' }}><a href={MyGitHub}>Termos</a><a href={MyGitHub}>Privacidade</a ></div>
                <a href={MyGitHub}>Política e segurança</a>
                <a href={MyGitHub}>Como funciona o youtube</a>
                <a href={MyGitHub} style={{ marginBottom: '13px' }}>Testar os novos recursos</a>
                <span>© 2023 Google LLC</span>
            </Footer>
        </Container>
        :
        <Container openMenu={openMenu}>
            {closedMenuItem.map((item) => (
                <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
                    <ButtonIcon src={item.src} />
                    <span>{item.name}</span>
                </MenuItem>
            ))}
        </Container>
        )
}

export default Menu

