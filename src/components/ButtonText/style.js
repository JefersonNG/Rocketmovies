import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  color: ${({ theme }) => theme.COLORS.ROSE};
  
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 10px;

  > svg {
    margin-right: 8px;
  }
`