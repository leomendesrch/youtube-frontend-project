import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { LoginContainer, LoginPage, TopText, Toptext2, YoutubeLogo, Topitems, InputContainer, EmailInput, PasswordInput, Label, Button, CreateAccountButton, ButtonContainer, ErrorText } from "./login.styles"
import LogoYoutube from '../../assets/youtubelogo.png'

import useUserContext from "../../hook/useUserContext"
import { CheckboxContainer } from "../SignUp/signup.style"

function Login(){
    const { handleLogin } = useUserContext()

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailValidate, setEmailValidate] = useState(true)
    const [passwordValidate, setPasswordValidate] = useState(true)

    const [emailFormatValidate, setEmailFormatValidate] = useState(true)

    const [showPassword, setShowPassword] = useState(false)

    const handleValidatForm = () => {
        let isValid = true
        if(password.trim() === '' || password.length < 8){
            setPasswordValidate(false)
            isValid = false
        } else if(password.trim() !== ''){
            setPasswordValidate(true)
        }
        if(email.trim() === ''){
            setEmailValidate(false)
            setEmailFormatValidate(true)
            isValid = false
        }else if(!/\S+@\S+\.\S+/.test(email)){
            setEmailValidate(false)
            setEmailFormatValidate(false)
            isValid = false
        } else if(email.trim() !== ''){
            setEmailValidate(true)

        } 
        return isValid
    }

    return(
        <LoginPage>
            <LoginContainer>
                <Topitems>
                    <YoutubeLogo src={LogoYoutube}/>
                    <TopText>Fazer Login</TopText>
                    <Toptext2>Use a sua conta do youtube</Toptext2>
                </Topitems>
                <InputContainer>
                    <Label htmlFor="email">Email</Label>
                    <EmailInput 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        valid={emailValidate}
                    />      
                    <ErrorText valid={emailValidate}>{emailFormatValidate? 'Insira seu endereço de email!' : 'Insira um formato de email válido!'}</ErrorText>

                    <Label htmlFor="password">Senha</Label>
                    <PasswordInput
                        type={showPassword? 'text' : 'password'}
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        valid={passwordValidate}
                    />
                    <ErrorText valid={passwordValidate}>Insira sua senha corretamente!</ErrorText>
                    <CheckboxContainer>
                        <input type="checkbox" name="showPassword" onClick={() => setShowPassword(!showPassword)}></input>
                        <label htmlFor="showPassword">Mostrar Mais</label>
                    </CheckboxContainer>
                </InputContainer>
                <ButtonContainer>
                    <CreateAccountButton onClick={() => navigate('/signup')}>Criar Conta</CreateAccountButton>
                    <Button 
                    onClick={() => {
                        const isValid = handleValidatForm()
                        if(isValid){
                            handleValidatForm()
                            handleLogin(email, password)
                        } else {console.log(Error)}
                    }} 
                    >
                        Avançar
                    </Button>
                    </ButtonContainer>
            </LoginContainer>
        </LoginPage>
    )
}

export default Login