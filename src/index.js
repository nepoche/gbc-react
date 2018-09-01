import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router'
import { DrizzleProvider } from 'drizzle-react'
import { Provider } from 'react-redux'

import './css/theme-nearblack.css'

// Layouts
import App from './App'

import { history, store } from './store'
import drizzleOptions from './drizzleOptions'

ReactDOM.render((
    <Provider store={store}>
      <DrizzleProvider options={drizzleOptions}>
        <Router history={history}>
          <App />
        </Router>
      </DrizzleProvider>
    </Provider>
  ),
  document.getElementById('root')
);
