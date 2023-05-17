import styled from "styled-components";

export const Container = styled.div`
    margin: 10px 30px;
    display: flex;
    justify-content: center;
    width: 90%;
`

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`


export const TopItems = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    margin-bottom: 13px;
    div{
        display: flex;
        align-items: center;
        img{
            height: 20px;
        }
        span{
            font-size: 17px;
            margin-left: 15px;
            font-weight: 600;
        }
    }
`
    
export const SeeAll = styled.div`
    height: 35px;
    border-radius: 20px;
    padding: 0 17px;
    color: #0A13BF;
    font-weight: 500;
    font-size: 14.5px;

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

export const Your = styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
    margin-left: 50px;
    justify-content: center;
    align-items: center;
    width: 220px;
    margin-top: 25px;
    img{
        height: 80px;
        width: 80px;
        border-radius: 50%;
    }

    span{
        font-size: 17px;
        margin: 10px 0 0px 0;
        font-weight: 400;
        align-items: center;
    }

`

export const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: #606060;
    height: 1px;

    span{
        font-size: 13px;
        display: flex;
    }

`

export const VideoContainer = styled.div<{ openMenu?: boolean }>`
    width: 100%;
    max-width: 1600px;
    display: grid;
    grid-template-columns: ${({openMenu}) => openMenu? 'repeat(4, 1fr)' : 'repeat(5, 1fr)'};
    column-gap: ${({openMenu}) => openMenu? '20px' : '16px'};
    row-gap: ${({openMenu}) => openMenu? '50px' : '40px'};
    align-items: center;
    margin: 0;
`

export const UserImage = styled.div`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .1s;
    font-size: 30px;
    background-color: #f2f2f2;    
`