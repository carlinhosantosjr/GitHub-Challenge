import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 100px;
color: white;
gap: 3rem;
`

export const MarkdownContainer = styled.div`
max-width: 850px;
padding: 0px 20px 200px 20px;

text-align: justify;
color: ${props => props.theme['base-text']};
line-height: 160%;
white-space: pre-wrap;

h1, h2, h3, h4 {
  color: ${props => props.theme.blue};
}
`
