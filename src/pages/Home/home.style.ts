import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    width: 100%;
    max-width: 1600px;
    display: grid;
    grid-template-columns: ${({openMenu}) => openMenu? 'repeat(4, 1fr)' : 'repeat(5, 1fr)'};
    column-gap: 15px;
    row-gap: 60px;
`

export const Division = styled.div<{ HomeDivision?: boolean }>`
    max-width: 1600px; 
    margin: 12px 0 12px 0;
    display: flex;
    align-items: center;
    border-bottom-style: solid;
    border-bottom-color: #E8E8E8;
    border-bottom-width: 4px;
    margin: ${({ HomeDivision }) => HomeDivision? '40px 0 0px 0' : '1px 0 0 0'} ;    
    `

export const ContainerShort = styled.div<{ openShortsContainer: boolean }>`
    display: ${({openShortsContainer}) => openShortsContainer? 'grid' : 'none'};
    grid-template-columns: repeat(8, 2fr);
    column-gap: 10px;
    justify-content: center;
    row-gap: 50px;
    height: 400px;
`

export const ShortContainerButton = styled.button<{ openShortsContainer: boolean }>`
    width: 100%;
    height: 50px;
    display: ${({openShortsContainer}) => openShortsContainer? 'none' : 'flex'};
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    background-color: white;
    border: none;
    cursor: pointer;
    :hover{
        background-color: #E8E8E8;
        border-top-style: solid;
        border-top-color: #E3E3E3;
        border-top-width: 2px;
    }    

    img{
        height: 20px;
    }        
`


export const TopicContainer = styled.div`
    display: grid;
    height: 80px;
    align-items: center;
`
export const TopicText = styled.p`
    font-size: 19px;
    font-weight: 600;
`
export const TopicSubText = styled.p`
    font-size: 13px; 
    color: #E8E8E8;
`