import React, { Component } from 'react';
import userservice from "../../lib/user-service";
import { withAuth } from "../../lib/AuthProvider";
import { Link } from "react-router-dom";

class Profile extends Component {
    state = {
        data: null,
    }

    componentDidMount() {
        //  fetch the data from API before initial render
        userservice.getuser()
            .then((data) => {
                console.log('data set',data)
                this.setState({ data: data })
            })
    }
    
    render() { 
        const { logout } = this.props;
        return (
            <div>
                {
                this.state.data ?
                    <div className="front-container">
                        <h3>Your profile</h3>
                        {
                        !this.state.data.image ? <img className="profile-photo" src="./images/profile.png"></img> :
                        <img className="profile-photo" src={this.state.data.image}></img>
                        }
                        <p>First Name: {this.state.data.firstName}</p>
                        <p>Last Name: {this.state.data.lastName}</p>
                        <p>Email: {this.state.data.email}</p>
                        <p>Contact Number: {this.state.data.contact}</p>
                        <Link to={'/myparking'}>
                            <button className="generic-button">
                                My Parking
                            </button>
                        </Link>
                        <Link to="/editprofile"><button className="logout-button">Edit Profile</button></Link>
                        <button className="logout-button" onClick={logout}>Logout</button>
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}

export default withAuth(Profile);