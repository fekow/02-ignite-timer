import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${({ theme }) => theme['gray-00']};

  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    font-size: 3rem;
    line-height: 3rem;
    gap: 0.4rem;
    span {
      padding: 2rem 0.4rem;
    }
  }

  span {
    background-color: ${({ theme }) => theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 2rem;
  color: ${({ theme }) => theme['green-500']};

  width: 4rem;
  overflow: hidden;

  display: flex;
  justify-content: center;
`
