import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700 };
  color: ${({ theme }) => theme.COLORS.WHITE };

  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;

  padding: .5rem 1.6rem;

  border-radius: .8rem;

  width: fit-content;
  height: fit-content;
`