import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: "Roboto Slab", serif;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE };
  }

  a, button, input, select, textarea {
    font-size: 1.6rem;
    font-family: "Roboto Slab", serif;
    color: ${({ theme }) => theme.COLORS.WHITE };
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    transition: filter 0.2s
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`