import { 
    ButtonContainer, 
    Container, 
    LogoContainer, 
    SearchContainer, 
    UserContainer, 
    ButtonIcon, 
    BRContainer, 
    InputContainer, 
    SearchInput,
    SearchButton,
} from "./header.style";
import HamburguerIcon from '../../assets/hamburguericon.png';
import YoutubeLogo from '../../assets/youtubelogo.png'
import Microfoneimg from '../../assets/microfone-gravador.png'
import SearchImage from '../../assets/search.png'
import NotificationImage from '../../assets/notificacao.png'
import VideoImage from '../../assets/video.png'
import UserImage from '../../assets/leo.png'
import { useNavigate } from "react-router-dom";

interface Iprops{
    openMenu: boolean,
    setOpenMenu: (openMenu: boolean) => void
}

function Header({ openMenu, setOpenMenu }: Iprops){
    const navigate = useNavigate()
    return(
        <Container>
            <LogoContainer>
                <ButtonContainer margin='0 10px 0 0' onClick={() => setOpenMenu(!openMenu)}>
                    <ButtonIcon alt="Menu button icon" src={HamburguerIcon} ></ButtonIcon>
                </ButtonContainer>
                <img onClick={() => navigate('/')}
                style={{cursor: 'pointer', height: '50px'}}
                alt="Youtube Icon"
                src={YoutubeLogo}
                />
                <BRContainer><p
                style={{fontSize: '10px', paddingBottom: '20px', margin: '5px', color: 'gray', cursor: 'pointer'}} onClick={() => navigate('/')}
                >BR</p></BRContainer> 
            </LogoContainer>

            <SearchContainer>
                <InputContainer>
                    <SearchInput placeholder="Pesquisar"></SearchInput>
                </InputContainer>
                <SearchButton>
                    <ButtonIcon alt="Search Button Image" src={SearchImage}/>
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="Microfone Button" src={Microfoneimg}></ButtonIcon>
                </ButtonContainer>
            </SearchContainer>

            <UserContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon src={VideoImage}/>
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon src={NotificationImage}/>
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px' style={{  }}>
                    <img alt="User Icon" src={UserImage} style={{ height:  '80%', borderRadius: '50%'}}></img>
                </ButtonContainer>
            </UserContainer>
        </Container>
    )
}

export default Header;