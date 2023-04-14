import { TopShort, TopShortImage, TopShortText } from './topShorts.styles'
import ShortIcon from '../../assets/Youtube_shorts_icon.svg.png'

function TopShortsComponent(){
    return(
    <TopShort>
        <TopShortImage src={ShortIcon}/>
        <TopShortText>Shorts</TopShortText>
    </TopShort>
    )
}

export default TopShortsComponent