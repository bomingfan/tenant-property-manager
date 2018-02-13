import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TenantSignup from "./pages/TenantSignup";
import LandlordSignup from "./pages/LandlordSignup";
import TenantSignin from "./pages/TenantSignin";



class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/tsignup" component={TenantSignup} />
          <Route exact path="/lsignup" component={LandlordSignup} />
          <Route exact path="/" component={TenantSignin} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
