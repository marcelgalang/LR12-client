import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './toolbox/theme';
import App from './App';
import './index.css';
import { store } from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
