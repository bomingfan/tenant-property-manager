import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TenantSignup from "./pages/TenantSignup";
import LandlordSignup from "./pages/LandlordSignup";
import TenantSignin from "./pages/TenantSignin";
import TenantMain from "./pages/TenantMain";
import LandlordMain from "./pages/LandlordMain";
import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/tsignup" component={TenantSignup} />
          <Route exact path="/lsignup" component={LandlordSignup} />
          <Route exact path="/" component={TenantSignin} />
          <Route exact path="/tmain" component={TenantMain} />
          <Route exact path="/lmain" component={LandlordMain} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
