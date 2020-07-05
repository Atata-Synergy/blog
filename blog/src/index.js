import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './Blog';
import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
