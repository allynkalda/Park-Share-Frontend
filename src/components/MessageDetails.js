import React, { Component } from 'react'
import axios from 'axios'

export default class MessageDetails extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        //  fetch the data from API before initial render
        const { id } = this.props.match.params;
        console.log(this.props.match.params)
        axios.get(`http://localhost:5000/mymessages/${id}`)
          .then( (apiResponse) =>{
            const data = apiResponse.data;
            this.setState({data: data});
            console.log(this.state.data)
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
