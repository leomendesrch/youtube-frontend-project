import { ArrowIconContainer, HeaderItemContainer, MenuHeader, Arrow, RightArrowContainer, LeftArrowContainer } from "./headerHome.style";
import RightArrowIcon from '../../assets/next.png'
import LeftArrowIcon from '../../assets/left-chevron.png'
import { useState } from "react";

const openMenuHeaderItems = [
    {name: 'Tudo'},
    {name: 'Mixes'},
    {name: 'Ao vivo'},
    {name: 'Jogos'},
    {name: 'React'},
    {name: 'Música'},
    {name: 'Counter-Strike: Global Offensi...'},
    {name: 'One Piece'},
    {name: 'Hip-Hop Brasileiro'},
    {name: 'Recomendados Para Você'},
    {name: 'Podcast'},
    {name: 'Autoescola'},
    {name: 'Javascript'},
    {name: 'Freestyle Rap'},
    {name: 'Fisiculturismo'},
    {name: 'Assistidos'},
    {name: 'Comédia'},
    {name: 'Novidades Para Você'},
]

const closedMenuHeaderItems = [
    {name: 'Tudo'},
    {name: 'Mixes'},
    {name: 'Ao vivo'},
    {name: 'Jogos'},
    {name: 'React'},
    {name: 'Música'},
    {name: 'Counter-Strike: Global Offensi...'},
    {name: 'One Piece'},
    {name: 'Hip-Hop Brasileiro'},
    {name: 'Recomendados Para Você'},
    {name: 'Podcast'},
    {name: 'Autoescola'},
    {name: 'Javascript'},
    {name: 'Freestyle Rap'},
    {name: 'Fisiculturismo'},
    {name: 'Assistidos'},
    {name: 'Volante'},
    {name: 'RPG'},
    {name: 'Comédia'},
    {name: 'Novidades Para Você'},
]

interface Iprops{
    openMenu: boolean
}

function HomeHeader({ openMenu }: Iprops){
    const [categoryBar, setCategoryBar] = useState(0);

    return(
        openMenu?
        <MenuHeader>
            {openMenuHeaderItems.map((item) => (
                <HeaderItemContainer categoryBar={categoryBar}>
                    <span>{item.name}</span>
                </HeaderItemContainer>
                ))}
            <LeftArrowContainer categoryBar={categoryBar} onClick={() => setCategoryBar(categoryBar - 1)}>
                <ArrowIconContainer >
                    <Arrow src={LeftArrowIcon}/>
                </ArrowIconContainer>
            </LeftArrowContainer>
            <RightArrowContainer categoryBar={categoryBar} onClick={() => setCategoryBar(categoryBar + 1)}>
                <ArrowIconContainer >
                    <Arrow src={RightArrowIcon}/>
                </ArrowIconContainer>
            </RightArrowContainer>
        </MenuHeader> 
        :
        <MenuHeader>
            {closedMenuHeaderItems.map((item) => (
                <HeaderItemContainer categoryBar={categoryBar}>
                    <span>{item.name}</span>
                </HeaderItemContainer>
            ))}
            <LeftArrowContainer categoryBar={categoryBar} onClick={() => setCategoryBar(categoryBar - 1)}>
                <ArrowIconContainer >
                    <Arrow src={LeftArrowIcon}/>
                </ArrowIconContainer>
            </LeftArrowContainer>
            <RightArrowContainer categoryBar={categoryBar} onClick={() => setCategoryBar(categoryBar + 1)}>
                <ArrowIconContainer >
                    <Arrow src={RightArrowIcon}/>
                </ArrowIconContainer>
            </RightArrowContainer>
        </MenuHeader> 
    )
}

export default HomeHeader;