import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background: ${({ theme }) => theme.COLORS.ROSE};

  padding: 1rem 1.6rem;
  border-radius: 1rem;
  
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;

  > svg {
    margin-right: 8px;
  }
`