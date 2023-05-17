import styled from "styled-components";

export const Container = styled.header`
    height: 55px;
    width: 100%;
    background-color: white;
    padding: 0px 16px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    position: sticky;
    top: 0;
`

export const ButtonIcon = styled.img`
    height: 20px;

`

export const ButtonContainer = styled.div<{ margin?: string}>`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: ${({margin}) => margin? margin : 0};
    transition: .1s;

    &:hover{
        background-color: #f2f2f2;
    }        
`

export const LoginButtonContainer = styled.div`
    height: 37px;
    width: 120px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .1s;
    font-size: 15px;
    border: 1px #E8E8E8 solid;
    gap: 5px;
    margin-top: 10px;
    &:hover{
        background-color: #f2f2f2;
    }
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    
`

export const BRContainer = styled.div`
    width: 20px;
    cursor: pointer;    
`


export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    width: 42.5%;
    margin-top: 5px;
    margin-left: 55px;
`

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    width: 500px;
    height: 37px;
    border: 1px solid #d3d3d3;
    border-radius: 25px 0px 0px 25px;
    padding: 0 17px;
`
export const SearchInput = styled.input`
    height: 25px;
    width: 100%;
    outline: none;
    border: none;
    font-size: 16px;
`

export const SearchButton = styled.button`
    height: 39px;
    width: 65px;
    border: 1px solid #d3d3d3;
    border-left-width: 0px;
    border-radius: 0 25px 25px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;   
    background-color:  #f8f8f8 ;
`

export const UserContainer = styled.div`
    display: flex;
    width: 150px;
    gap: 10px;

`

export const CleanButton = styled.div`
    height: 33px;
    width: 33px;
    border-radius: 50%;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    margin: 0;
    transition: .1s;
    position: fixed;
    margin-left: 470px;
    &:hover{
        background-color: #f2f2f2;
    }    
`






