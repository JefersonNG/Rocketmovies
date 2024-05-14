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
  max-width: ${({ theme }) => theme.LIMITER_CONTENT };
  width: 100%;
  padding: 0 5rem;
  overflow-y: auto;

  grid-area: content;

  margin: 0 auto;

  >section {
    margin: 5rem 0;
    display: flex;
    justify-content: space-between;

    >a {
      width: fit-content;
    }
  }

`

