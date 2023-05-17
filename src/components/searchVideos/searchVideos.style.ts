import styled from "styled-components"

export const VideoCard = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    column-gap: 15px;
    cursor: pointer;
`

export const VideoImage = styled.img`
    width: 350px;
    height: 180px;
    border-radius: 12px;
    object-fit: cover;
`

export const VideoInfoContainer = styled.div`
    height: 100%;
    width: calc(100% - 300px);
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Title = styled.p`
    font-weight: 400;
    font-size: 18px;
    margin: 0;
`

export const Statistics = styled.p`
    font-size: 14px;
    margin: 0;
    display: flex;
    color: #595959;
`

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
`

export const ChannelImage = styled.div`
    width: 33px;
    height: 32px;
    display: flex;
    font-size: 13px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
    background-color: #e6e6e6;
`

export const UserName = styled.p`
    font-size: 13.5px;
    margin: 0;
    color: #595959;
`

export const Description = styled.p`
    width: 100%;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
    overflow: hidden;
`


