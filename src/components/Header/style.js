import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;

  width: 100%;
  padding: 2.4rem 5rem;

  border-bottom: 1px solid ;
  border-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  >h1 {
    color: ${({ theme }) => theme.COLORS.ROSE}; 
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.4rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
`

export const Profile = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 1.5rem;

  >div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .5rem;

    width: 100%;
    text-align: end;

    span {
      white-space: nowrap;
      overflow: hidden;
      max-width: 22rem;
      color: ${({ theme }) => theme.COLORS.WHITE}; 
    }
  }

  img {
    width: 56px;
    height: 56px;

    border: .1rem solid;
    border-color: ${({ theme }) => theme.COLORS.GRAY_100};
    border-radius: 50%;
  }
`