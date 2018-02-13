import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TenantSignup from "./pages/TenantSignup";


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={TenantSignup} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
