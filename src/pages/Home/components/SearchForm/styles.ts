import styled from 'styled-components'

export const Container = styled.div`
width: 864px;
margin-top: 12px;
`

export const StyledInput = styled.input`
border: none;
box-shadow: 0 0 0 0.5px ${props => props.theme['base-label']};
border: 1px solid transparent;
background-color: ${props => props.theme['base-input']};
width: 100%;
height: 45px;
border-radius: 6px;
color: ${props => props.theme['base-text']};
font-size: 16px;
padding-left: 14px;

&:focus {
    border: 1px solid ${props => props.theme.blue};
}

&::placeholder {
  color: ${props => props.theme['base-label']};
}
`
