import { ShortContainer, ShortImage, ShortTextContainer, ShortVideoText, ShortVideoTextInfo} from "./homeShorts.styles"



function HomeShorts(){
    return(
            <ShortContainer>
                    <ShortImage src={"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSswaR4G0RlSX7dRuKFViEhJDBAYzWVHQ6IKRBn4UbcPdiqZ4Sk"}/>
                    <ShortTextContainer>
                        <ShortVideoText>Monkey D. Luffy 2022 Shorts</ShortVideoText>
                        <ShortVideoTextInfo>1,4 mi visualizações</ShortVideoTextInfo>
                    </ShortTextContainer>
            </ShortContainer>
    )
}

export default HomeShorts