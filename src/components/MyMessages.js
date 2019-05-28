import React, { Component } from 'react'
import rentpark from "./../lib/rentparking-service";
import MessageRender from './MessageRender';

class MyMessages extends Component {
    state = {
        listOfMessages: [],
        showMessage: false,
    }

    renderMessage = () => {
        this.setState({ shshowMessageowForm: !this.state.showForm })
      }    

    componentDidMount() {
        //  fetch the data from API before initial render
        rentpark.getmessages()
            .then((data) => {
                console.log(data)
                this.setState({ listOfMessages: data })
            })
    }
    render() {
        const {listOfMessages} = this.state;
        return (
            <div>
                <h3>My Messages</h3>
                {
            listOfMessages.map( (list, index) => {
              return <MessageRender key={index} list={list}/>
                        {/* {
                this.state.renderMessage ? <MessageRender addTheFood={this.addFood} /> : null
                        } */}
              {/* <MessageRender key={index} list={list}>Message</MessageRender> */}
          })
        }
            </div>
        )
    }
}

export default MyMessages;