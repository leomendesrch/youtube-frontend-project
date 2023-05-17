import styled from "styled-components";

interface Valid {
    valid?: boolean
}

export const LoginPage = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
`

export const LoginContainer = styled.div`
    height: 55%;
    width: 27%;
    border: 1.5px #E8E8E8 solid;
    border-radius: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`

export const Topitems = styled.div`
    height: auto;
    width: 100%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
`
export const YoutubeLogo = styled.img`
    height: 50px;
`
export const TopText = styled.span`
    font-size: 21px;
    font-weight: 600;
    
`

export const Toptext2 = styled.span`
    font-size: 16px;
    font-weight: 400;
`

export const InputContainer = styled.div`
    width: 100%;
    height: 200px;
    display: grid;
    justify-content: center;
`

export const Label = styled.label`
    font-size: 17px;
    font-weight: 600;
`

export const EmailInput = styled.input<Valid>`
    width: 260px;
    height: 40px;
    border-radius: 5px;
    border: ${({valid}) => valid? '1px grey solid' : '1px #e60000 solid'};
    padding-left: 4px;
    font-size: 15px;
`

export const PasswordInput = styled.input<Valid>`
    width: 260px;
    height: 40px;
    border-radius: 5px;
    border: ${({valid}) => valid? '1px grey solid' : '1px #e60000 solid'};
    padding-left: 4px;
    font-size: 15px;
`

export const ErrorText = styled.p<Valid>`
    font-size: 14px;
    width: 100%;
    margin: 0;
    color: #e60000;
    display: ${({valid}) => valid? 'none' : 'flex'};
`

export const ButtonContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 25px;
`

export const CreateAccountButton = styled.button`
    background-color: white;
    color: red;
    border-radius: 5px;
    font-weight: 600;
    transition: 0.1s;
    cursor: pointer;
    height: 40px;
    width: 34%;
    border: none;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
    :hover{
        background-color: #ffe6e6;
    }
`

export const Button = styled.button`
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

