import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Example } from "./src/components";
import store from './src/redux-store/store';
import {
  Home,
  Profile,
  LoginContainer,
  SignUpContainer,
} from "./src/containers";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>

            <Route path='/profile'>
              <Profile />
            </Route>

            <Route path='/login'>
              <LoginContainer />
            </Route>

            <Route path='/signin'>
              <SignUpContainer />
            </Route>

            <Route path='/example'>
              <Example />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
