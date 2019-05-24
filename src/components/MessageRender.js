import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class MessageRender extends Component {

    state={
        user:{}
    }

    componentDidMount(){

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
