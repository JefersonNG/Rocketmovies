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
export const Content = styled.div` 
  max-width: ${({ theme }) => theme.LIMITER_CONTENT};
  width: 100%;

  overflow-y: auto;
  padding: 0 5rem;
  grid-area: content;

  margin: 4rem auto 0;

`

export const Form = styled.form`  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  
  color: ${({ theme }) => theme.COLORS.WHITE};

 

  header {
    width: 100%;

    h1 {
      margin-bottom: 2rem;
      font-size: 3.6rem;
    }
  }

  span { 
    width: 100%;
    display: flex;
    gap: 2rem; 
  }

  footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    > button:first-child {
      width: 100%;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.ROSE};
      padding: 1rem 1.6rem;
      border-radius: .8rem; 
    }
  }
  
`

