import { useContext, useState, useRef } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import UseHamburguerContext from "../../hook/useHamburguerContext";

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
    LoginButtonContainer,
    CleanButton,
} from "./header.style";
import HamburguerIcon from '../../assets/hamburguericon.png';
import YoutubeLogo from '../../assets/youtubelogo.png'
import Microfoneimg from '../../assets/microfone-gravador.png'
import SearchImage from '../../assets/search.png'
import NotificationImage from '../../assets/notificacao.png'
import VideoImage from '../../assets/video.png'
import UserIcon from '../../assets/conecte-se.png'
import useDropDownMenuContext from "../../hook/useDropDownMenuContext";
import useVideosContext from "../../hook/useVideosContext";

function Header(){
    const navigate = useNavigate()
    const { login, userName } = useContext(UserContext)
    const { openMenu, setOpenMenu} = UseHamburguerContext()
    const { dropDownMenu, setDropDownMenu } = useDropDownMenuContext()
    const { setSearchValue } = useVideosContext()
    const [inputValue, setInputValue] = useState('')



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
                    <SearchInput 
                    placeholder="Pesquisar" 
                    onChange={(e) => {setInputValue(e.target.value); }}
                    onKeyDown={(e) => {
                        if(e.key === 'Enter'){
                            navigate('/search')
                            setSearchValue(inputValue)
                        }
                    }}
                    ></SearchInput>
                </InputContainer>
                <SearchButton onClick={() => {navigate('/search'); setSearchValue(inputValue)}}
                >
                    <ButtonIcon alt="Search Button Image" src={SearchImage}/>
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="Microfone Button" src={Microfoneimg}></ButtonIcon>
                </ButtonContainer>
            </SearchContainer>
                {login?
                <UserContainer>
                    <ButtonContainer >
                        <ButtonIcon src={VideoImage}/>
                    </ButtonContainer>
                    <ButtonContainer >
                        <ButtonIcon src={NotificationImage}/>
                    </ButtonContainer>
                    <ButtonContainer onClick={() => setDropDownMenu(!dropDownMenu)}>
                        {userName.charAt(0).toUpperCase()}
                    </ButtonContainer>
                </UserContainer>

                :

                <LoginButtonContainer onClick={() =>  navigate('/login')}>
                    <img  style={{ height: '18px' }} src={UserIcon} alt="login button"/>
                    Fazer login
                </LoginButtonContainer>
                }
            
        </Container>
    )
    
}

export default Header;