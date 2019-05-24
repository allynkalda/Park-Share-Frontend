import React, { Component } from 'react'
import rentpark from "./../lib/rentparking-service";
//import { Link } from "react-router-dom";

class MyMessages extends Component {
    state = {
        listOfMessages: [],
    }

    componentDidMount() {
        //  fetch the data from API before initial render
        rentpark.getmessages()
            .then((data) => {
                this.setState({ listOfMessages: data })
            })
    }
    render() {
        const {listOfMessages} = this.state;
        return (
            <div>
                <h3>My Messages</h3>
                {
            listOfMessages.map( (list) => {
              return <p>{list.message}</p>
          })
        }
            </div>
        )
    }
}

export default MyMessages;