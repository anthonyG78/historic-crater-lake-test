import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import App from './components/App';
import reducers from './reducers';
import './index.css';

ReactDOM.render(
    <Provider store={applyMiddleware(ReduxPromise)(createStore)(reducers)}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

injectTapEventPlugin();
