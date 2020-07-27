import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '@bit/thefarce.repo-docs.app';
import * as serviceWorker from './serviceWorker';
import doclets from './jsdoc-data.json';

ReactDOM.render(
  <React.StrictMode>
    <App doclets={doclets}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
