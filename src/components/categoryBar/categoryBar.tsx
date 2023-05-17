import { ArrowIconContainer, HeaderItemContainer, MenuHeader, Arrow, RightArrowContainer, LeftArrowContainer } from "./categoryBar.style";
import RightArrowIcon from '../../assets/next.png'
import LeftArrowIcon from '../../assets/left-chevron.png'
import { useState } from "react";
import UseHamburguerContext from "../../hook/useHamburguerContext";
import useCategoryBarContext from "../../hook/useCategoryBarContext";

const categoryButtons = [
    {name: 'Tudo', id: '0'},
    {name: 'Games', id: '20'},
    {name: 'Futebol', id: '17'},
    {name: 'Entretenimento', id: '24'},
    {name: 'Música', id: '10'},
    {name: 'Pessoas e blogs', id: '22'},
    {name: 'Automóveis e veículos', id: '2'},
    {name: 'Animais e pets', id: '15'},
    {name: 'Notícias e política', id: '25'},
    {name: 'Comédia', id: '23'},
    {name: 'Shorts', id: '26'},
    {name: 'Infantil', id: '1'},
    {name: 'Vida a dois', id: '22'},
    {name: 'Esportes', id: '17'},
    {name: 'Memes', id: '23'},
    {name: 'Jogos pc', id: '20'},
    {name: 'Jornais', id: '25'},
    {name: 'Kids', id: '1'},
    {name: 'Hits do momento', id: '10'},
    {name: 'História das civilizações', id: '22'},
    {name: 'Ciências', id: '15'},
    {name: 'Viagens pelo mundo', id: '24'},
    {name: 'Séries', id: '23'},
    {name: 'Novidades', id: 'Educação'},
    {name: 'Ciência e tecnologia', id: '2'},
    {name: 'Documentários', id: '26'},
    {name: 'Economia', id: '25'},
    {name: 'Investimentos e finanças', id: '20'},
    {name: 'Moda e estilo', id: '23'},
    {name: 'Comunicação', id: '10'},
    {name: 'Beleza', id: '24'}
]

function CategoryBar(){
    const [categoryBar, setCategoryBar] = useState(0)
    const [selectCategoryBarId, setSelectCategoryBarId] = useState(0)
    const { openMenu } = UseHamburguerContext()
    const { setCategoryBarId } = useCategoryBarContext()

    return(
        openMenu?
        <MenuHeader>
            <LeftArrowContainer categoryBar={categoryBar}>
                <ArrowIconContainer  onClick={() => setCategoryBar(categoryBar - 1)}>
                    <Arrow src={LeftArrowIcon}/>
                </ArrowIconContainer>
            </LeftArrowContainer>
            {categoryButtons.map((item, index) => (
                <HeaderItemContainer 
                categoryBar={categoryBar}
                selectCategoryBarId = {selectCategoryBarId}
                onClick={() => 
                    {
                        setCategoryBarId(Number(item.id))
                        setSelectCategoryBarId(index)
                    }}
                index={index}
                >
                    <span>{item.name}</span>
                </HeaderItemContainer>
                ))}
            <RightArrowContainer categoryBar={categoryBar}>
                <ArrowIconContainer onClick={() => setCategoryBar(categoryBar + 1) }>
                    <Arrow src={RightArrowIcon}/>
                </ArrowIconContainer>
            </RightArrowContainer>
        </MenuHeader> 
        :
        <MenuHeader>
            {categoryButtons.map((item, index) => (
                <HeaderItemContainer 
                categoryBar={categoryBar}
                selectCategoryBarId = {selectCategoryBarId}
                onClick={() => 
                    {
                        setCategoryBarId(Number(item.id))
                        setSelectCategoryBarId(index)
                    }}
                index={index}
                >
                <span>{item.name}</span>
                </HeaderItemContainer>
                ))}
            <LeftArrowContainer categoryBar={categoryBar} >
                <ArrowIconContainer onClick={() => setCategoryBar(categoryBar - 1)}>
                    <Arrow src={LeftArrowIcon}/>
                </ArrowIconContainer>
            </LeftArrowContainer>
            <RightArrowContainer categoryBar={categoryBar} >
                <ArrowIconContainer onClick={() => setCategoryBar(categoryBar + 1)}>
                    <Arrow src={RightArrowIcon}/>
                </ArrowIconContainer>
            </RightArrowContainer>
        </MenuHeader> 
    )
}

export default CategoryBar;