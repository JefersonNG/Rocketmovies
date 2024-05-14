import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid; 
  grid-template-rows: 105px auto;
  grid-template-areas: 
    "header"
    "content";
`
export const Content = styled.main` 
  max-width: ${({ theme }) => theme.LIMITER_CONTENT };
  overflow-y: auto;
  padding: 0 5rem;
  grid-area: content;

  margin: 6rem auto;

`

export const Title = styled.div`
  width: 100%;
  margin-top: 2.4rem;
  
  display: flex;
  align-items: center;
  gap: 2rem;
  
  color: ${({ theme }) => theme.COLORS.WHITE };
  
`

export const Create = styled.div`
  width: 100%;
  margin-top: 2.4rem;

  display: flex;
  gap: 3rem;

  >span {
    display: flex;
    gap: 1rem;
    align-items: center;
    
    svg {
      color: ${({ theme }) => theme.COLORS.ROSE };
    }
  }

  >span img {
      width: 16px;
      height: 16px;
    }
` 

export const Tags = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;

  margin-top: 2.4rem;

`

export const Description = styled.div`
  width: 100%;

  margin-top: 2.4rem;

  text-align: justify;
`