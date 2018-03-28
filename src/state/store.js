import { createStore, applyMiddleware, combineReducers } from "redux";
import * as reducers from "./ducks"; // import all reducers from ducks/index.js
import createSagaMiddleware from 'redux-saga';
import rootSaga from './../sagas/rootSaga';

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers(reducers);
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}