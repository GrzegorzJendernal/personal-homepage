import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './core/App';
import reportWebVitals from './core/reportWebVitals';
import { GlobalStyle } from './core/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './core/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
