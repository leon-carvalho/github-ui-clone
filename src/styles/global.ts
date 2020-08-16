import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background-color: var(--primary);
  }

  *,button,input,textarea {
    border: none;
    background: none;
    color: var(--black);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    transition: background-color 0.4s ease-out;
  }

  button, a {
    cursor: pointer;
  }

  ul, ol {
    list-style: none;
  }

  :root {
    ${props => {
      const { theme } = props;
      let append = '';
      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      });
      return append;
    }}
  }
`;
