import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  height: fit-content;
  width: 100%;
  border-radius: 1rem;

  margin-bottom: 8px;

  display: flex;
  align-items: center;

  >svg {
    margin-left: 10px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > input {
    padding: 1.6rem 1.4rem;
    width: 100%;
    background: transparent;
    border: none;
    outline: none;

    color: ${({ theme }) => theme.COLORS.COLOR_WHITE};
    font-size: 1.6rem;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

`