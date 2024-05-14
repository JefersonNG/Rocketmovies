import styled from "styled-components";

export const Container = styled.textarea`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  height: 200px;
  width: 100%;
  border-radius: 1rem;

  padding: 1.6rem 2.4rem;
  border: none;
  outline: none;

  font-size: 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  overflow: hidden;

  resize: none;
`