import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import configureStore from "./state/store";

const store = configureStore();

// import rootReducer from './reducers';
// import rootSaga from './sagas/rootSaga';

// const sagaMiddleware = createSagaMiddleware();
// let store = createStore(
//     rootReducer,
//     applyMiddleware(sagaMiddleware)
// );
// sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
