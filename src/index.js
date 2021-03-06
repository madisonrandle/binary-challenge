import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.jsx';
import './index.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <>
    <header>
      WHAT TO DO?
    </header>
    <App />
  </>,
  document.getElementById('root')
);

serviceWorker.unregister();
