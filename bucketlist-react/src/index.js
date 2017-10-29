import React from 'react';
import ReactDOM from 'react-dom';
import * as App from './application';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App.Components.App />, document.getElementById('root'));
registerServiceWorker();
