import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './application';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter} from 'react-router-dom'
import {makeMainRoutes} from './routes';

ReactDOM.render(
        <BrowserRouter>
            {makeMainRoutes()}
        </BrowserRouter>, 
    document.getElementById('root'));
registerServiceWorker();
