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
import RentSuccess from "./components/RentSuccess";
import MessageForm from "./components/MessageForm";
import MyMessages from "./components/MyMessages";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <h3>Park Share</h3>
          <Navbar />
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
            <Route path='/directory' component={Directory}/>
            <Route exact path='/findparking' component={FindParking}/>
            <Route path='/findparking/:id' component={ParkingDetails}/>
            <Route exact path='/rentparking' component={RentParking}/>
            <Route path='/rentparking/success' component={RentSuccess}/>
            <Route exact path='/message/:id' component={MessageForm}/>
            <Route path='/mymessages' component={MyMessages}/>
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
