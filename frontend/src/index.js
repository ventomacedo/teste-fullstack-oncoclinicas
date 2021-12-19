import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { interceptRequest, interceptResponse } from './services/api';

interceptRequest();
interceptResponse();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
