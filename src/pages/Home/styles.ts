import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
    width: 100%;
  }
`

export const BaseCountdownButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  color: ${({ theme }) => theme['gray-100']};

  gap: 0.5rem;
  font-weight: bold;
  transition: background-color 0.2s ease-in-out;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${({ theme }) => theme['green-500']};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme['green-700']};
  }
`
export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${({ theme }) => theme['red-500']};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme['red-700']};
  }
`
