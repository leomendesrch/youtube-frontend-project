import { ButtonContainer, CheckboxContainer, EmailInput, InputContainer, ErrorText, NameInput, PasswordInput, PasswordInputContainer, PasswordText, SignUpButton, SignUpContainer, SignUpLoginAccountButton, SignUpPage, SignUpTopText, SignUpTopitems, SignUpToptext2, YoutubeLogo } from "./signup.style"
import YoutubeLogoIcon from '../../assets/youtubelogo.png'

import { useNavigate } from "react-router-dom"
import { useState, useRef } from "react"
import useUserContext from "../../hook/useUserContext"

function SignUp(){
    const navigate = useNavigate()
    const { SignUp } = useUserContext();

    const [showPassword, setShowPassword] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    const [userNameValid, setUserNameValid] = useState(false)
    const [userEmailValid, setUserEmailValid] = useState(false)
    const [userPasswordValid, setUserPasswordValid] = useState(false)
    const [verifyEmailFormat, setVerifyEmailFormat] = useState(false)
    const [comparePasswordValid, setComparePasswordValid] = useState(false)

    const emailRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const confirmPasswordRef = useRef<HTMLInputElement>(null)

    function handleValidateForm(){
        let isValid = true
        if(name.trim() === ''){
            setUserNameValid(true)
            isValid = false
        }else if(name.trim() !== ''){
            setUserNameValid(false)
        }
        if(email.trim() === ''){
            setUserEmailValid(true)
            setVerifyEmailFormat(false)
            isValid = false
        } else if(!/\S+@\S+\.\S+/.test(email)){
            setUserEmailValid(true)
            setVerifyEmailFormat(true)
            isValid = false
        } else if(email.trim() !== ''){
            setUserEmailValid(false)
        }

        if(password.trim() === '' || password.length < 8){
            setUserPasswordValid(true)
            setComparePasswordValid(false)
            isValid = false
        } else if(password !== confirmPassword) {
            setComparePasswordValid(true)
            setUserPasswordValid(true)
            isValid = false
            }
         else if(password.trim() !== ''){
            setUserPasswordValid(false)
        }

        return isValid
    } 
    
    return(
        <SignUpPage>
            <SignUpContainer>
                <SignUpTopitems>
                    <YoutubeLogo src={YoutubeLogoIcon}/>
                    <SignUpTopText>Criar sua conta do youtube</SignUpTopText>
                    <SignUpToptext2>Prosseguir no youtube</SignUpToptext2>
                </SignUpTopitems>

                <InputContainer>
                    <NameInput
                    type="text" 
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    ref={nameRef}
                    valid={userNameValid}
                    >
                    </NameInput>
                    <ErrorText valid={userNameValid}>Insira um nome de usuário!</ErrorText>
                    <EmailInput
                    type="email"
                    placeholder="Seu endereço de email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    ref={emailRef}
                    valid={userEmailValid}
                    >
                    </EmailInput>
                    <ErrorText valid={userEmailValid}>{verifyEmailFormat? 'Insira um formato de endereço de e-mail válido!' : 'Digite seu e-mail.'}</ErrorText>
                </InputContainer>

                <PasswordInputContainer>
                    <PasswordInput
                    type={showPassword? 'text': 'password'}
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    ref={passwordRef}
                    maxLength={30}
                    valid={userPasswordValid}
                    >
                    </PasswordInput>

                    <PasswordInput
                    placeholder="Confirmar"
                    type={showPassword? 'text': 'password'}
                    name="confirm"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    ref={confirmPasswordRef}
                    maxLength={30}
                    valid={userPasswordValid}
                    >
                    </PasswordInput>
                </PasswordInputContainer>
                <ErrorText valid={userPasswordValid}>{comparePasswordValid? 'Digite senhas iguais!' : 'Insira um formato de senha válido!'}</ErrorText>
                <PasswordText>Use no mínimo 8 caracteres.</PasswordText>
                <CheckboxContainer>
                    <input type="checkbox" name="showPassword" onClick={() => setShowPassword(!showPassword)}></input>
                    <label htmlFor="showPassword">Mostrar Senha</label>
                </CheckboxContainer>

                <ButtonContainer>
                    <SignUpLoginAccountButton onClick={() => navigate('/login')} >Faça login em vez disso</SignUpLoginAccountButton>
                    <SignUpButton 
                    onClick=
                    {(e) => {
                    const isValid = handleValidateForm()
                    e.preventDefault()
                    try{
                        if(isValid){
                            handleValidateForm()
                            SignUp(name,email,password)
                        }
                    } catch(error){ console.log(error)}
                    }}
                    >Próximo</SignUpButton>
                </ButtonContainer>
            </SignUpContainer>
        </SignUpPage>
    )
}

export default SignUp