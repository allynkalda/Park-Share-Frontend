import React, { Component } from 'react';
import { Link } from "react-router-dom";
import userservice from "./../lib/user-service";

export default class MessageRender extends Component {
    state = {
        user: null
    }

    componentDidMount(){
        userservice.getuser()
        .then((data) => {
            console.log('data set', data)
            this.setState({ user: data })
        })
    }

    render() {
        const { _id } = this.props.list;
        return (
            <div>
            <div key={_id}>
                <Link to={`/mymessages/${_id}`}>
                    <h4>Message</h4>
                </Link>
            </div>
            </div>
        )
    }
}
