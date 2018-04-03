import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./root/App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from "./state/store";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
