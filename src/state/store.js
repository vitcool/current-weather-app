import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import * as reducers from "./ducks";
import rootSaga from "./../sagas/rootSaga";
import createHistory from "history/createBrowserHistory";

export const history = createHistory();

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers(reducers);
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = composeWithDevTools({});
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
