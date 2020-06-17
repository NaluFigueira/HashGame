import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

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


  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: ${darken(0.1, '#e8e3f4')};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #e8e3f4;
  }
`;
