import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

 *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, :root, #root{
    min-height: 100%;
    font-size: 16px;
  }

  body{
    background: linear-gradient(#FF7F00 0%, #FFBB00 100%);
    background-repeat: no-repeat;
    background-attachment: fixed;

    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    --webkit-font-smoothing: antialised !important;
  }
`;
