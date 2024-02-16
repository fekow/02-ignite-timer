import styled from 'styled-components'

export const HistoryContainer = styled.div`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme['gray-100']};
  }
`
export const HistoryList = styled.div`
  flex: 1;
  margin-top: 2rem;
  overflow: auto;
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    min-width: 600px;
    thead {
      tr {
        th {
          background-color: ${({ theme }) => theme['gray-600']};
          padding: 1rem;
          text-align: left;
          color: ${({ theme }) => theme['gray-100']};
          font-size: 0%.875rem;
          line-height: 1.6;
          &:first-child {
            border-top-left-radius: 0.5rem;
            padding-left: 1.5rem;
          }
          &:last-child {
            border-top-right-radius: 0.5rem;
            padding-right: 1.5rem;
          }
        }
      }
    }

    tbody {
      tr {
        td {
          background-color: ${({ theme }) => theme['gray-700']};
          border-top: 4px solid ${({ theme }) => theme['gray-800']};
          padding: 1rem 0;
          font-size: 0.875rem;
          line-height: 1.6;

          &:first-child {
            width: 50%;
            padding-left: 1.5rem;
          }
          &:last-child {
            padding-right: 1.5rem;
          }
        }
      }
    }
  }
`
