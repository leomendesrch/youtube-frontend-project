import styled from "styled-components";

interface Valid {
    valid?: boolean
}

export const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background-color: rgb(0,0,0, 0.7);
`

export const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1000;
    background-color: rgb(0,0,0, 0.7);
    transform: translate(-50%, -50%);
    background-color: white;
    height: 62%;
    width: 50%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`
export const ModalHeader = styled.div`
    height: 50px;
    width: 100%;
    padding-top: 10px;  
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ModalHeaderTitle = styled.p`
    font-size: 20px;
    font-weight: 600;
    padding-left: 20px;
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const ModalHeaderExit = styled.img`
    height: 22px;
    padding-right: 20px;
    cursor: pointer;
`

export const Division = styled.div`
    width: 100%;
    margin: 10px 0px;
    display: flex;
    border-bottom-style: solid;
    border-bottom-color: #d9d9d9;
    border-bottom-width: 1px;
`

export const ModalInfo = styled.p`
    font-size: 23px;
    font-weight: 600;
    padding-left: 35px;
    margin-top: 10px;
`
export const ModalContent = styled.div`
    height: 52%;
    column-gap: 15px;
    padding-left: 35px;
    display: flex;
`

export const VideoInfoInputContainer = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
`

export const TitleInput = styled.textarea<Valid>`
    height: 70px;
    border: ${({valid}) => valid? '1px #e60000 solid' : '1px #d9d9d9 solid'};
    border-radius: 3px;
    padding-left: 5px;
    display: inline-block;
    vertical-align: top;
    resize: none;
    font-size: 17px;
`

export const DescriptionInput = styled.textarea<Valid>`
    height: 150px;
    border: ${({valid}) => valid? '1px #e60000 solid' : '1px #d9d9d9 solid'};
    display: flex;
    border-radius: 3px;
    padding-left: 5px;
    resize: none;
    font-size: 17px;
    margin-top: 10px;
`

export const BannerVideoURLContainer = styled.div`
    height: 290px;
    width: 50%;
    display: flex;
    flex-direction: column;
`

export const BannerVideoURL = styled.textarea<Valid>`
    height: 233px;
    width: 60%;
    border: ${({valid}) => valid? '1px #e60000 solid' : '1px #d9d9d9 solid'};
    border-radius: 3px;
    margin-right: 35px;
    padding-top: 10px;
    display: flex;
    padding-left: 5px;
    resize: none;
    font-size: 16px;
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

