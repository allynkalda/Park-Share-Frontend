import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";

// Components
import FindParking from "./components/FindParking";
import ParkingDetails from "./components/ParkingDetails";
import RentParking from "./components/RentParking";
import Directory from "./components/Directory";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <h1>Park Share Project</h1>
          <Navbar />
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
            <Route path='/directory' component={Directory}/>
            <Route exact path='/findparking' component={FindParking}/>
            <Route path='/findparking/:id' component={ParkingDetails}/>
            <Route path='/rentparking' component={RentParking}/>
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
