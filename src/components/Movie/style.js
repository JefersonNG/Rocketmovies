import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 3.2rem;
  border-radius: 1.6rem;
  margin-bottom: 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  >h2 {
    font-size: 2.4rem;
  }

  >p {
    font-size: 1.4rem;
  }

  >footer {
    display: flex;
    gap: 1rem;
    align-items: center;

 
  }
`