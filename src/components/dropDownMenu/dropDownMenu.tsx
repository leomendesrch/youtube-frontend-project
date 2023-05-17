import { DropDownMenuContainer, DropDownMenuItemsContainer ,DropDownMenuItems, DropDownMenuProfile, DropDownMenuProfileInfo, ButtonIcon, DropDownMenuText, UserContainer, Division } from "./dropDownMenu.style"

import { useNavigate } from "react-router-dom"


import ChangeProfileIcon from '../../assets/change.png'
import LogOutIcon from '../../assets/logout.png'
import UserIcon from '../../assets/user.png'
import useDropDownMenuContext from "../../hook/useDropDownMenuContext"
import useUserContext from "../../hook/useUserContext"

function DropDownMenu(){
    const navigate = useNavigate()

    const { dropDownMenu, setDropDownMenu } = useDropDownMenuContext()
    const { Logout, userName } = useUserContext()

    const dropDownMenuItems = [
        {name: 'Seu canal', image: UserIcon, link:'/channel', func:() => {}},
        {name: 'Alternar conta', image: ChangeProfileIcon, link:'/login', func:Logout},
        {name: 'Sair', image: LogOutIcon, link:'/', func:Logout}
    ]
    return(
        <DropDownMenuContainer dropDownMenu={dropDownMenu}>
            <DropDownMenuProfile>
                <UserContainer>{userName.charAt(0).toUpperCase()}</UserContainer>
                <DropDownMenuProfileInfo>
                    <DropDownMenuText style={{ fontWeight: 'bold' }}>{userName}</DropDownMenuText>
                </DropDownMenuProfileInfo>
            </DropDownMenuProfile>
            <Division />
            <DropDownMenuProfileInfo>
                <DropDownMenuItemsContainer>
                    {dropDownMenuItems.map((item) => (
                        <DropDownMenuItems 
                        onClick={
                        () => {navigate(item.link)
                        item.func()
                        setDropDownMenu(!dropDownMenu)
                        }}>
                            <ButtonIcon src={item.image}/>
                            <DropDownMenuText>{item.name}</DropDownMenuText>
                        </DropDownMenuItems>
                    ))}
                </DropDownMenuItemsContainer>
            </DropDownMenuProfileInfo>
        </DropDownMenuContainer>
    )
}

export default DropDownMenu