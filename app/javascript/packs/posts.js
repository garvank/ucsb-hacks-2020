import React from 'react';
import ReactDOM from 'react-dom';

import App from './posts/app.js'

const mount = document.querySelector("[data-mount=app]");
ReactDOM.render(<App />, mount);
