import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import Weather from "./../containers/Weather";
import About from "./../containers/About";
import NotFound from "./../containers/NotFound";

import "./../styles/App.css";
import { history } from "./../state/store";

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div className="App">
          <main>
            <Switch>
              <Route exact path="/" component={Weather} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
