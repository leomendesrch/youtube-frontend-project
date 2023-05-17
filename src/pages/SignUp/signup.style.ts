import styled from "styled-components";

interface Valid{
    valid?: boolean
}

export const SignUpPage = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
`

export const SignUpContainer = styled.form`
    height: 53%;
    width: 27%;
    border: 1.5px #E8E8E8 solid;
    border-radius: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 35px;
`

export const SignUpTopitems = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const YoutubeLogo = styled.img`
    height: 55px;
    width: 100px;
`

export const SignUpTopText = styled.span`
    font-size: 21px;
    font-weight: 600;
    
`

export const SignUpToptext2 = styled.span`
    font-size: 16px;
    font-weight: 400;
`

export const InputContainer = styled.div`
    width: 100%;
    height: 145px;
    display: grid;
    margin-top: 10px;
`

export const NameInput = styled.input<Valid>`
    width: auto;
    height: 40px;
    border-radius: 5px;
    border:  ${({valid}) => valid? '1px #e60000 solid' : '1px grey solid'} ;
    padding-left: 8px;
    font-size: 15px; 
    margin-top: 5px;
`

export const EmailInput = styled.input<Valid>`
    width: auto;
    height: 40px;
    border-radius: 5px;
    border:  ${({valid}) => valid? '1px #e60000 solid' : '1px grey solid'} ;
    padding-left: 8px;
    font-size: 15px;
    margin-top: 5px;
`

export const PasswordInputContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    gap: 10px;
    margin-top: 10px;
`

export const PasswordInput = styled.input<Valid>`
    width: 60%;
    height: 40px;
    border-radius: 5px;
    border: ${({valid}) => valid? '1px #e60000 solid' : '1px grey solid'};
    padding-left: 8px;
    font-size: 15px;
`

export const PasswordText = styled.p`
    font-size: 14px;
    color: #999999;
    margin: 0;
`

export const CheckboxContainer = styled.div`
    height: 30px;
    width: 150px;
    display: flex;
    align-items: center;
    gap: 4px;
    
    label{
        font-size: 15px;
    }
`


export const ErrorText = styled.p<Valid>`
    font-size: 14px;
    margin: 0;
    color: #e60000;
    padding: 5px 0;
    display: ${({valid}) => valid? 'flex' : 'none'};
`

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`

export const SignUpLoginAccountButton = styled.button`
    background-color: white;
    color: red;
    border-radius: 5px;
    font-weight: 600;
    transition: 0.1s;
    cursor: pointer;
    height: 40px;
    width: 45%;
    border: none;
    font-size: 14.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
    :hover{
        background-color: #ffe6e6;
    }
`

export const SignUpButton = styled.button`
    background-color: red;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    height: 40px;
    width: 30%;
    border: none;
    font-size: 15.5px;
    font-family: 'Open Sans', sans-serif;
`
