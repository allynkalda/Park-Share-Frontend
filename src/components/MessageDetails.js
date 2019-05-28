import React, { Component } from 'react';
import rentpark from "./../lib/rentparking-service";

export default class MessageDetails extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        //  fetch the data from API before initial render
        const { id } = this.props.match.params;
        rentpark.getmymessages(id)
          .then( (data) =>{
            this.setState({data: data});
          })

          .catch((err) => console.log(err));
      }
      
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Message Details</h3>
                <p>{this.state.data.message}</p>
            </div>
        )
    }
}
