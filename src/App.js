import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";

// Main Pages
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Intro from "./pages/Intro";
import PrivateRoute from "./pages/PrivateRoute";
import AnonRoute from "./pages/AnonRoute";
import Navbar from "./pages/Navbar";

// Components
import FindParking from "./components/FindParking/FindParking";
import ParkingDetails from "./components/FindParking/ParkingDetails";
import RentParking from "./components/RentParking/RentParking";
import RentSuccess from "./components/RentParking/RentSuccess";
import MessageForm from "./components/Messages/MessageForm";
import MyMessages from "./components/Messages/MyMessages";
import MessageDetails from "./components/Messages/MessageDetails";
import EditProfile from "./components/FindParking/EditProfile";
import Profile from "./components/MyProfile/Profile";
import MyParking from "./components/MyProfile/MyParking";
import MyParkingEdit from "./components/MyProfile/MyParkingEdit";
import MapContainer from "./components/Map/MapContainer";

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
            <PrivateRoute path='/profile' component={Profile}/>
            <PrivateRoute path='/editprofile' component={EditProfile}/>
            <PrivateRoute exact path='/findparking' component={FindParking}/>
            <PrivateRoute path='/findparking/:id' component={ParkingDetails}/>
            <PrivateRoute exact path='/rentparking' component={RentParking}/>
            <PrivateRoute path='/rentparking/success' component={RentSuccess}/>
            <PrivateRoute exact path='/myparking' component={MyParking}/>
            <PrivateRoute exact path='/myparkingedit' component={MyParkingEdit}/>
            <PrivateRoute exact path='/message/:id' component={MessageForm}/>
            <PrivateRoute exact path='/mymessages' component={MyMessages}/>
            <PrivateRoute path='/mymessages/:id' component={MessageDetails}/>
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
