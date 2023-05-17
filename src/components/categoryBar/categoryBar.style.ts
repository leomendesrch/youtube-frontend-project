import styled from "styled-components"

export const MenuHeader = styled.div`
    max-width: 1600px;
    height: 56px;
    background-color: white;
    display: flex;
    align-items: center;
    gap: 10px;
    overflow: hidden;
    position: fixed;
    top: 55px;
    margin-bottom: 56px;
`

export const HeaderItemContainer = styled.div<{ categoryBar:number, index: number, selectCategoryBarId: number}>`
    display: flex;
    background-color: ${({index, selectCategoryBarId}) => index === selectCategoryBarId? 'black': '#f2f2f2'};
    align-items: center;
    padding: 3px 13px;
    cursor: pointer;
    height: 26px;
    transition: 0.4s;
    justify-content: center;
    border-radius: 10px;
    width: 100%;
    position: relative;
    right: ${({ categoryBar }) => categoryBar === 1? '25%' : '0' && categoryBar === 2? '50%' : '0' && categoryBar === 3? '75%' : '0' && categoryBar === 4? '100%' : '0' && categoryBar === 5? '125%' : '0'};

    &:hover{
        background-color: ${({index, selectCategoryBarId}) => index === selectCategoryBarId? 'back': '#E6E6E6'};
    }

    span{
        font-size: 14.5px;
        font-weight: 400;
        white-space: nowrap;
        color: ${({index, selectCategoryBarId}) => index === selectCategoryBarId? 'white': 'black'};
    }
`
export const RightArrowContainer = styled.div<{ categoryBar:number }>`
    width: 120px;
    height: 56px;
    display: ${({ categoryBar }) => categoryBar === 5? 'none' : 'flex'};
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    right: 0;
    background-image: linear-gradient(to right, transparent 15%, white 35%);
`

export const ArrowIconContainer = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0;
    transition: .1s;
    margin-right: 20px;
    &:hover{
        background-color: #f2f2f2;
    }        
`

export const Arrow = styled.img`
    height: 18px;
`

export const LeftArrowContainer = styled.div<{ categoryBar: number }>`
    width: 100px;
    height: 56px;
    display: ${({ categoryBar }) => categoryBar === 0? 'none' : 'flex'};
    justify-content: flex-start;
    align-items: center;
    z-index: 2;
    position: fixed;
    left: 10;
    background-image: linear-gradient(to left, transparent 20%, white 40%);
`




