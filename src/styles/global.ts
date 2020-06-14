import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #8162cc;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }

  h1,h2,h3,h4,h5,h6,strong {
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`;
