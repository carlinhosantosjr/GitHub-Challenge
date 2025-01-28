import styled from 'styled-components'

export const Container = styled.div`
display: grid;
grid-template-columns: 5fr 1fr;
background-color: ${props => props.theme['base-post']};
width: 416px;
height: 260px;
border-radius: 8px;
padding: 30px;
overflow: hidden;
text-overflow: ellipsis;
gap: 1.5rem;
border: 2px solid transparent;
transition: border 0.3s;
cursor: pointer;
//word-break: break-all;

&:hover {
  border-color: ${props => props.theme['base-label']};
}

h3 {
  color: ${props => props.theme['base-subtitle']};
}

span {
  color: ${props => props.theme['base-span']};
  font-size: 14px;
}

p {
  grid-column: span 2;
  display: flex;
  color: ${props => props.theme['base-text']};
  font: 12px;
}
`
