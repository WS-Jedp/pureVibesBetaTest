import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from './router'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from './store'

import { GlobalStyles } from './styles'

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
        <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
