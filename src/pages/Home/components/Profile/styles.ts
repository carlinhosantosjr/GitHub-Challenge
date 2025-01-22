import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
background-color: ${props => props.theme['base-profile']};
display: flex;
width: 864px;
height: 212px;
border-radius: 12px;
margin-top: -100px;

img {
  margin: auto;
  padding: 35px;
}
`

export const InfoContainer = styled.div`
display: flex;
flex: 2;
flex-direction: column;
margin: auto;
gap: 1.2rem;
`

export const HeaderProfile = styled.div`
display: flex;
justify-content: space-between;
margin-right: 30px;

h1 {
  color: ${props => props.theme['base-title']};
  font-size: 24px;
  font-weight: bold;
}

span {
  display: flex;
  align-items: center;
  color: ${props => props.theme.blue};
  font-size: 12px;
  gap: 0.4rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}
`

export const BioContainer = styled.div`
color: ${props => props.theme['base-text']};
font-size: 16px;
`

export const FooterContainer = styled.div`
display: flex;
gap: 2rem;

span {
  color: ${props => props.theme['base-subtitle']};
  padding-left: 6px;
}

div {
  display: flex;
  align-items: center;
}
`

export const ArrowUpStyled = styled(FontAwesomeIcon)`
color: ${props => props.theme.blue};
`
export const GitHubStyled = styled(FontAwesomeIcon)`
color: ${props => props.theme['base-label']};
font-size: 18px;
`
export const BuildingStyled = styled(FontAwesomeIcon)`
color: ${props => props.theme['base-label']};
font-size: 16px;
`
export const UserGroupStyled = styled(FontAwesomeIcon)`
color: ${props => props.theme['base-label']};
font-size: 14px;
`
