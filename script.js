import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import './src/css/style.css';

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('app')
)