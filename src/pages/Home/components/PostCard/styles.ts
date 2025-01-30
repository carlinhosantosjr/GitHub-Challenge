import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
background-color: ${props => props.theme['base-post']};
width: 416px;
height: 260px;
border-radius: 8px;
padding: 30px;
gap: 1rem;
border: 2px solid transparent;
transition: border 0.3s;
cursor: pointer;

&:hover {
  border-color: ${props => props.theme['base-label']};
}

p {
  display: flex;
  color: ${props => props.theme['base-text']};
}
`

export const HeaderCard = styled.div`
display: flex;
justify-content: space-between;

h3 {
flex: 4;
  color: ${props => props.theme['base-subtitle']};
}

span {
  flex: 1;
  color: ${props => props.theme['base-span']};
  font-size: 14px;
}
`
export const MarkDownContainer = styled.div`
font-size: 12x;
color: ${props => props.theme['base-text']};
`
