import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-self: center;
padding-bottom: 100px;
`

export const SearchContainerHeader = styled.div`
display: flex;
margin-top: 60px;

h2 {
  flex: 1;
  color: ${props => props.theme['base-subtitle']};
  font-size: 18px;
}

span {
  color: ${props => props.theme['base-span']};
  font-size: 14px;
}
`

export const ContentContainer = styled.div`
margin-top: 50px;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 2rem;
`
