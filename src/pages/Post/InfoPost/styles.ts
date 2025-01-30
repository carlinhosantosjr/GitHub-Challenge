import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
background-color: ${props => props.theme['base-profile']};
display: flex;
flex-direction: column;
width: 864px;
min-height: 170px;
border-radius: 12px;
margin-top: -90px;
`

export const HeaderInfo = styled.div`
color: ${props => props.theme.blue};
width: 100%;
display: flex;
justify-content: space-between;
padding: 30px;
padding-bottom: 0;
font-size: 12px;
`

export const TitleContainer = styled.div`
color: ${props => props.theme['base-title']};
padding: 18px 0 0 30px;
`

export const FooterInfo = styled.div`
padding: 12px 0 0 30px;
display: flex;
color: ${props => props.theme['base-span']};
gap: 2rem;

span {
  margin-left: 8px;
}
`

export const ChevronLeft = styled(FontAwesomeIcon)`
margin-right: 10px;
font-size: 12px;
`

export const ArrowUpRight = styled(FontAwesomeIcon)`
margin-left: 8px;
`
export const GithubIcon = styled(FontAwesomeIcon)`
color: ${props => props.theme['base-label']};
`
export const CalendarDayIcon = styled(FontAwesomeIcon)`
color: ${props => props.theme['base-label']};
`
export const CommentIcon = styled(FontAwesomeIcon)`
color: ${props => props.theme['base-label']};
`
