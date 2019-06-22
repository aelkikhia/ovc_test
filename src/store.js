import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from 'reducers';
import promiseMiddleware from 'redux-promise-middleware';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
    return createStore(
        reducers,
        composeEnhancer(applyMiddleware(thunk, promiseMiddleware))
    );
}