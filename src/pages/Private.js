import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import FindParking from "./../components/FindParking";
import RentParking from "./../components/RentParking";

class Private extends Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.user.username}</h1>
        <Router>
        <Switch>
            <Route path='/findparking' component={FindParking}/>
            <Route path='/rentparking' component={RentParking}/>
        </Switch>
        </Router>
      </div>
    );
  }
}

export default withAuth(Private);
