import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

export interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 6px;
  margin: 10px;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
`
