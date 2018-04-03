import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import * as reducers from "./ducks";
import rootSaga from "./../sagas/rootSaga";
import createHistory from "history/createBrowserHistory";

export const history = createHistory();

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers(reducers)

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = composeWithDevTools({});

  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}

const store = configureStore()
const persistor = persistStore(store)

export {store, persistor}
