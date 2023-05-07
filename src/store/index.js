
import { applyMiddleware, legacy_createStore, compose } from "redux";
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga'
import todoSagas from "./sagas"

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
);


const store = legacy_createStore(reducer, enhancer);
sagaMiddleware.run(todoSagas)

export default store;
