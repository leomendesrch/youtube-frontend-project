import styled from "styled-components";

export const ChannelPageContainer = styled.div`
    height: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const UserBanner = styled.img`
    height: 250px;
    width: 100%;
    object-fit: cover;
`

export const UserContainer = styled.div`
    height: 150px;
    width: 100%;
    margin-left: 40px;
    margin-top: 30px;
    display: flex;
    gap: 30px;
`

export const UserImage = styled.div`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .1s;
    font-size: 40px;
    background-color: #f2f2f2;    
`

export const UserInfo = styled.div`
    height: 60px;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    gap: 5px;
`


export const UserName = styled.p`
    height: auto;
    font-weight: 600;
    font-size: 22px;
    margin: 0;
`

export const UserId = styled.p`
    height: auto;
   font-weight: 400;
   font-size: 16px;
   color: #666666;
   margin: 0;
`

export const UserDescription = styled.p`
    height: auto;
    color: #a6a6a6;
`

export const ButtonContainer = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CreateVideoButton = styled.button`
    height: 50px;
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    color: white;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 17px;
`

export const Division = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
    margin-left: 4px;
    `

export const ChannelDivisionImage = styled.img`
    height: 24px;
    `

export const ChannelDivisionText = styled.span`
    font-size: 20px;
    margin-left: 15px;
    font-weight: 600;
    margin-bottom: 2px;
    `
    
export const VideosContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    margin-top: 20px;
`
export const Video = styled.div`
    width: 100%;
    height: 125px;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(6, 1fr);
`

