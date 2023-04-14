import styled from "styled-components";

export const Container = styled.div`
    width: 93%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SubsTop = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    margin-bottom: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
        font-size: 16px;
        font-weight: 600;
    }

`

export const SeeAll = styled.div`
    height: 35px;
    border-radius: 20px;
    padding: 0 17px;
    color: #0A13BF;
    font-weight: 500;
    font-size: 14.5px;
    display: flex;
    align-items: center;
    :hover{
        background-color: #87CEFA;
        opacity: 0.5;
        cursor: pointer;
    }
`

export const Division = styled.div`
    width: 100%; 
    margin: 12px 0 12px 0;
    display: flex;
    align-items: center;
    border-bottom-style: solid;
    border-bottom-color: #E8E8E8;
    border-bottom-width: 1px;
    margin-top: 30px;
`

export const ButtonContainer = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0;
    transition: .1s;

    &:hover{
        background-color: #f2f2f2;
    }        
`

export const VideoContainer = styled.div`
    width: 100%;
    max-width: 1600px;
    display: grid;
    grid-template-columns: repeat(6, 5fr);
    column-gap: 15px;
    row-gap: 60px;
`