import React, { Component } from 'react'
import rentpark from "./../lib/rentparking-service";
import { Link } from "react-router-dom";
import RenderFindPark from './RenderFindPark';
import Search from './Search'

export default class FindParking extends Component {
    state = {
        listOfParking: [],
        searchValue: '',

    }

    handleSearch = searchValue => {
        this.setState({
          searchValue: searchValue,
        })
      }

    renderFind = (listOfParking, searchValue) => {
        // const { handleAddToList } = this;
        const filteredArray = listOfParking.filter( parking => {
          return parking.location.toLowerCase().includes(searchValue.toLowerCase())
        })
        return filteredArray.map((parking, index) => <RenderFindPark key={index} parking={parking} />)
      }

    componentDidMount() {
        //  fetch the data from API before initial render
        rentpark.getparking()
            .then((data) => {
                console.log(data)
                this.setState({listOfParking: data}, )
            })
      }


    render() {
       // const {listOfParking} = this.state;
        return (
            <div>
            <h1>Find Parking</h1>
            <Search handleSearch={this.handleSearch}/>
            {this.renderFind(this.state.listOfParking, this.state.searchValue)}
            </div>
        )
    }
}
