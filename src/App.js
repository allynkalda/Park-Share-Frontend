import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Main Pages
import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Intro from "./pages/Intro";

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";

// Components
import Navbar from "./components/Navbar";
import FindParking from "./components/FindParking";
import ParkingDetails from "./components/ParkingDetails";
import RentParking from "./components/RentParking";
import Directory from "./components/Directory";
import RentSuccess from "./components/RentSuccess";
import MessageForm from "./components/MessageForm";
import MyMessages from "./components/MyMessages";
import MessageDetails from "./components/MessageDetails";
import EditProfile from "./components/EditProfile";
import Profile from "./components/Profile";
import MapContainer from "./MapContainer";

class App extends Component {
  render() {
   
    return (
      <AuthProvider>
        <div className="container">
          <Navbar />
          <Switch>
            <AnonRoute exact path="/" component={Intro} />
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <AnonRoute path="/logout" component={Logout} />
            <PrivateRoute path="/private" component={MapContainer} />
            <Route path='/directory' component={Directory}/>
            <PrivateRoute path='/profile' component={Profile}/>
            <PrivateRoute path='/editprofile' component={EditProfile}/>
            {/* <PrivateRoute exact path='/map' component={MapContainer}/> */}
            <Route exact path='/findparking' component={FindParking}/>
            <Route path='/findparking/:id' component={ParkingDetails}/>
            <Route exact path='/rentparking' component={RentParking}/>
            <Route path='/rentparking/success' component={RentSuccess}/>
            <Route exact path='/message/:id' component={MessageForm}/>
            <Route exact path='/mymessages' component={MyMessages}/>
            <Route path='/mymessages/:id' component={MessageDetails}/>
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
