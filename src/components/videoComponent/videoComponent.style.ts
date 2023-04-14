import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const VideoBanner = styled.img<{ openMenu?: boolean}>`
    width: 100%;
    height: ${({openMenu}) => openMenu? '190px' : '180px'};
    border-radius: 12px;
    cursor: pointer;
`

export const TitleContainer = styled.div `
    display: flex;
    width: 100%;
    margin-top: 5px;
    
`

export const ChannelImage = styled.div`
    background-color: #EDEDED;
    width: 37px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
`

export const TextContainer = styled.div `
    display: flex;
    flex-direction: column;

`

export const Title = styled.span `
    font-weight: 600;
    color: #0f0f0f;
    cursor: pointer;
`

export const VideoText = styled.span`
    color: #8c8c8c;
    font-size: 14px;
    cursor: pointer;
`



