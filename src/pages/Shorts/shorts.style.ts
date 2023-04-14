import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

export const ShortsVideoContainer = styled.div`
    margin-top: 10px;
    margin-right: 10px;
    width: 450px;
    height: 95%;
    background-color: black;
    border-radius: 15px;
`
export const ShortsVideoLateralBar = styled.div`
    width: 50px;
    height: 96%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;
    white-space: pre-wrap;
`   
export const LateralBarButton = styled.span`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .1s;
    background-color: #f2f2f2;
    margin-bottom: 4px;
    :hover{
        background-color: #e8e8e8;
    }

    img{
        height: 20px;
    }
`

export const LateralBarText = styled.span`
    width: 50px;
    height: 30px;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    word-wrap: break-word;
`
export const MusicIcon = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 4px;
`
