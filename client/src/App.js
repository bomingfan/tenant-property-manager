import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TenantSignup from "./pages/TenantSignup";
import TenantMain from "./pages/TenantMain";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={TenantMain} />
          
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
