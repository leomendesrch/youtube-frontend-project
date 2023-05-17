import styled from "styled-components";


export const Container = styled.div<{ openMenu: boolean }>`
    width: ${({openMenu}) => openMenu? '280px' : '80px'};
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    position: sticky;
    background-color: white;
    top: 55px;
    ::-webkit-scrollbar-thumb {
        background-color: white;
    }
    :hover{
        ::-webkit-scrollbar-thumb {
            background-color: #8c8c8c;
            border-radius: 20px;
            
        }
       
        ::-webkit-scrollbar{
            width: 8px;
        }
        
        ::-webkit-scrollbar:horizontal{
            display: none;
        }
}
`

export const MenuItem = styled.div<{ openMenu: boolean}>`
    width: ${({openMenu}) => openMenu? '97%' : '100%'};
    display: flex;
    flex-direction: ${({openMenu}) => openMenu? 'row' : 'column'};
    justify-content: ${({openMenu}) => openMenu? 'none' : 'center'};
    min-height: ${({openMenu}) => openMenu? '41px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    align-items: center;
    padding: ${({openMenu}) => openMenu? '0 0 0 13px' : '4px'};
    gap: ${({openMenu}) => openMenu? '25px' : '6px'};
    span{
        font-size: ${({openMenu}) => openMenu? '14.5px' : '10px'};
        font-weight: ${({openMenu}) => openMenu? '400' : '400'};
    }

    &:hover{
       background-color: #f2f2f2;
    }

`

export const SpanContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ButtonIcon = styled.img`
    height: 20px;
`

export const Division = styled.div<{ openMenu: boolean }>`
    width: 100%; 
    margin: 12px 0 12px 0;
    display: ${({openMenu}) => openMenu? 'flex' : 'none'};
    align-items: center;
    border-bottom-style: solid;
    border-bottom-color: #E8E8E8;
    border-bottom-width: 1px;
`

export const Footer = styled.footer`
    width: 94%;
    margin-left: 7px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    font-size: 12.5px;
    font-weight: 600;
    color: #696969;

    a{
        list-style: none;
        text-decoration: none;
        cursor: pointer;
        margin-right: 10px;
        color: #696969;
    }

    span{
        font-size: 12px;
        color: #999999;
    }
`

export const LoginButtonContainer = styled.div`
    height: 40px;
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
    margin-left: 30px;
    &:hover{
        background-color: #f2f2f2;
    }
`