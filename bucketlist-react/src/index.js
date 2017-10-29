import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './application';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter} from 'react-router-dom'
import {makeMainRoutes} from './routes';
import { Provider } from 'react-redux';

import {configureStore} from './store/configureStore';


ReactDOM.render(
        <Provider store={configureStore()}>
        <BrowserRouter>
            {makeMainRoutes()}
        </BrowserRouter>
        </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
