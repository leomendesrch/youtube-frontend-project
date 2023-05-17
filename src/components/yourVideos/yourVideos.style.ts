import styled from "styled-components";

export const Container = styled.div`
    width: 220px;
    height: auto;
    cursor: pointer;
`;

export const VideoBanner = styled.img<{ openMenu?: boolean}>`
    width: 100%;
    height: ${({openMenu}) => openMenu? '120px' : '120px'};
    border-radius: 12px;
`

export const TitleContainer = styled.div `
    display: flex;
    width: 100%;
    margin-top: 5px;
`


export const TextContainer = styled.div `
    display: flex;
    flex-direction: column;

`

export const Title = styled.span `
    font-weight: 600;
    color: #0f0f0f;
    font-size: 15px;
    margin-bottom: 5px;
`

export const VideoText = styled.span`
    color: #8c8c8c;
    font-size: 12px;
`



