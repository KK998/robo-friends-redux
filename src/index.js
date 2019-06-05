import React from 'react';
import ReactDOM from 'react-dom';

import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

import App from './containers/App';
import { searchRobots } from './reducers.js';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'tachyons';

const store = createStore(searchRobots);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();