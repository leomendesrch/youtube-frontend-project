import { BannerVideoURL, BannerVideoURLContainer, ButtonContainer, Container, CreateVideoButton, DescriptionInput, Division, ModalContainer, ModalContent, ModalHeader, ModalHeaderExit, ModalHeaderTitle, ModalInfo, TitleInput, VideoInfoInputContainer } from './createVideoModal.style'
import { ErrorText } from '../../pages/SignUp/signup.style'

import CloseIcon from '../../assets/close.png'

import { useState } from 'react'
import useVideosContext from '../../hook/useVideosContext'
import useUserContext from '../../hook/useUserContext'

interface Iprops{
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

function Modal({ isOpen, setIsOpen }: Iprops){
    const { CreateVideo, GetVideos } = useVideosContext()
    const { user_id, token, userName } = useUserContext()
    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [banner, setBanner] = useState('')
    
    const [titleValid, setTitleValid] = useState(false)
    const [descriptionValid, setDescriptionValid] = useState(false)
    const [bannerValid, setBannerValid] = useState(false)

    function cleanVideoInfo(){
        setTitle('')
        setDescription('')
        setBanner('')
    }

    const handleValidateForm = () => {
        let isValid = true

        if(title === ''){
            setTitleValid(true)
            isValid = false
        } else if(title !== ''){
            setTitleValid(false)
        }

        if(description === ''){
            setDescriptionValid(true)
            isValid = false
        } else if(description !== ''){
            setDescriptionValid(false)
        }

        if(banner === ''){
            setBannerValid(true)
            isValid = false
        } else if(banner !== ''){
            setBannerValid(false)
        }
        return isValid
    }

    const date = new Date()

    if(isOpen){
        return(
            <Container>
                <ModalContainer>
                    <ModalHeader>
                        <ModalHeaderTitle>{title}</ModalHeaderTitle>
                        <ModalHeaderExit src={CloseIcon}  onClick={() => {setIsOpen(!isOpen)}}/>
                    </ModalHeader>
                    <Division />
                    <ModalInfo>Detalhes</ModalInfo>
                    <ModalContent>
                        <VideoInfoInputContainer>
                            <TitleInput 
                            placeholder='Título(obrigatório)' 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)}
                            valid={titleValid}
                            />
                            <ErrorText valid={titleValid}>Insira um título!</ErrorText>

                            <DescriptionInput 
                            placeholder='Descrição' 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)}
                            valid={descriptionValid}
                            />

                            <ErrorText valid={descriptionValid}>Insira uma descrição!</ErrorText>

                        </VideoInfoInputContainer>
                        <BannerVideoURLContainer>
                            <BannerVideoURL 
                            placeholder='Insira o URL do banner do video'
                            value={banner} 
                            onChange={(e) => setBanner(e.target.value)}
                            valid={bannerValid}
                            />
                            <ErrorText valid={bannerValid}>Insira uma imagem URL!</ErrorText>
                        </BannerVideoURLContainer>

                    </ModalContent>
                    <ButtonContainer>
                        <CreateVideoButton onClick={() => {
                            const isValid = handleValidateForm()
                            if(isValid){
                                handleValidateForm()
                                CreateVideo(user_id ,title, description, banner, date, token, userName); setIsOpen(false); cleanVideoInfo()
                                GetVideos(user_id, token)
                            }
                        }}>Criar Vídeo</CreateVideoButton>
                    </ButtonContainer>
                </ModalContainer>
            </Container>
        )
    }
    return(null)
}

export default Modal