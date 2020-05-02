import {
  createGlobalStyle
} from 'styled-components';

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 400 Raleway, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: #999999;
  }

input {
    width: 100%;
    height: 60px;
    border: 1px solid #547B98;
    background: #F3F3F3;
    border-radius: 4px;
    padding: 0 24px;
    color: #737373;
    text-align: center;
    font: 300 18px Raleway, sans-serif;
}

.button {
    width: 100%;
    height: 60px;
    background: #202B3F ;
    border: 0;
    border-radius: 4px;
    color: #F3F3F3;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
}

a{
  text-decoration: none;
  color: #737373;
  font: 400 Raleway;
}
`;
