import styled from 'styled-components'
import imagem from "../../assets/something.png"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex; 
  flex-direction: row-reverse;
`

export const Form = styled.form`
  padding: 20px 100px;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};

  > h1 {
    color: ${({ theme }) => theme.COLORS.ROSE};
    font-size: 5rem;
    margin: 100px 0 0 0;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.4rem;
    margin: 0 0 100px 0 ;
  }

  > span {
    display: block;
    margin:  50px 0;
    font-size: 2rem;
  }

  >a {
    margin: 20px 0 50px
  }

  > a {
    width: 100%;
    text-align: center;
  }
`

export const Background = styled.div`
  background: url(${imagem}) no-repeat center;
  background-size: cover;

  flex: 1;
`