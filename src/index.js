import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import App from './App'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: 'Open Sans Regular';
    src: url(./assets/fonts/OpenSans-Regular.ttf);
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans Regular', sans-serif;
  }
`

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById('root')
)
