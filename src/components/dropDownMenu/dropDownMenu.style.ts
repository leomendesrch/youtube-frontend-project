import styled from "styled-components";

export const DropDownMenuContainer = styled.div<{ dropDownMenu?: boolean }>`
    height: 250px;
    width: 270px;
    background-color: white;
    z-index: 4;
    display: ${({dropDownMenu}) => dropDownMenu? 'flex' : 'none'};
    transition: 0.3s;
    flex-direction: column;
    position: fixed;
    right: 0;
    margin-right: 25px;
    top: 55px;
    border-radius: 5px;
    box-shadow: 0 0 54px -25px black;
`

export const DropDownMenuProfile = styled.div`
    height: 80px;
    width: 300px;
    display: flex;
    border-radius: 5px 5px 0 0;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin: 15px 0 0 30px;
`

export const UserContainer = styled.div`
    width: 60px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .1s;
    background-color: #f2f2f2;   
`

export const DropDownMenuProfileInfo = styled.div`
    width: 100%;
`

export const DropDownMenuItemsContainer = styled.div`
    height: 150px;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 5px 5px;
    gap: 2px;
`
export const DropDownMenuItems = styled.div`
    height: 45px;
    display: flex;
    gap: 25px;
    padding-left: 20px;
    cursor: pointer;
    align-items: center;
    transition: 0.1s;
    &:hover{
       background-color: #f2f2f2;
    }

`

export const ButtonIcon = styled.img`
    height: 20px;
`


export const DropDownMenuText = styled.span`
    font-size: 16px;
    font-weight: 400;
`

export const Division = styled.div`
    width: 100%; 
    margin: 12px 0 12px 0;
    display: flex;
    align-items: center;
    border-bottom-style: solid;
    border-bottom-color: #E8E8E8;
    border-bottom-width: 1px;
`

