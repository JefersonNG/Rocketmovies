import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
    
  > h2 {
    text-align: start;
    font-size: 2rem;
    margin-bottom: 2.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > div {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    width: 100%;
    border-radius: .8rem;

    padding:  1.6rem;
    display: flex;
    flex: 1;
    gap: 1rem;
    align-items: center;
  }
`