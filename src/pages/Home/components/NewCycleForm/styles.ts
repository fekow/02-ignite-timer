import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInputStyles = styled.input`
  background-color: transparent;
  height: 2.5rem;
  border-bottom: 2px solid ${({ theme }) => theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme['gray-100']};

  @media (max-width: 768px) {
    padding: 0 0.25rem;
    font-size: 1.05rem;
  }
  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }
  &:focus {
    box-shadow: none;
    border-bottom: 2px solid ${({ theme }) => theme['green-500']};
  }
`

export const TaskInput = styled(BaseInputStyles)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInputStyles)`
  width: 4rem;
`
