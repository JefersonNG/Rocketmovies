import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;


  >header {
    display: flex;
    align-items: center;
    padding: 2rem 5rem;
    justify-content: start;

    width: 100%;
    height: 144px;

    background: ${({ theme }) => theme.COLORS.GRAY_200};
    color: ${({ theme }) => theme.COLORS.WHITE};

    >a {
      display: inline;
    }
  }
  
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;


  >div:nth-child(3) {
    margin-bottom: 20px;
  }

  >div:nth-child(5) {
    margin-bottom: 20px;
  }
`

export const Avatar = styled.div`
  position: relative;
  border-radius: 50%;

  top: -70px;

  max-width: 186px;
  height: 186px;


  >img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


  > label {
    position: absolute;
    bottom: 20px;
    left: 83%;

    border-radius: 50%;
    padding: 1rem;

    display: grid;
    align-items: center;
    justify-content: center;
    
    cursor: pointer;
    background: ${({ theme }) => theme.COLORS.ROSE };

    input {
      display: none;
    }    
  }
`