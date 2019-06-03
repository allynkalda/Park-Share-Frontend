import React, { Component } from 'react'
import rentpark from "../../lib/rentparking-service";
import MessageRender from './MessageRender';

class MyMessages extends Component {
    state = {
        listOfMessages: [],
        showMessage: false,
    }

    renderMessage = () => {
        this.setState({ showMessage: !this.state.showForm })
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
            <div className="front-container">
                <h3 className="message-space">My Messages</h3>
                {
            listOfMessages.map( (list, index) => {
              return <MessageRender key={index} list={list}/>
          })
        }
            </div>
        )
    }
}

export default MyMessages;