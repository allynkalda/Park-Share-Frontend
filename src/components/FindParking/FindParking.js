import React, { Component } from 'react'
import rentpark from "../../lib/rentparking-service"
import RenderFindPark from './RenderFindPark';
import Search from "../../components/FindParking/Search"

export default class FindParking extends Component {
    state = {
        listOfParking: [],
        searchValue: '',
    }

    componentDidMount() {
        //  fetch the data from API before initial render
        rentpark.getparking()
            .then((data) => {
                this.setState({listOfParking: data})
            })
    }

    handleSearch = searchValue => {
        this.setState({
          searchValue: searchValue,
        })
    }

    renderFind = (listOfParking, searchValue) => {
        const filteredArray = listOfParking.filter( parking => {
          return parking.location.toLowerCase().includes(searchValue.toLowerCase())
        })
        return filteredArray.map((parking, index) => <RenderFindPark key={index} parking={parking} />)
    }

    render() {
        const {listOfParking, searchValue} = this.state;
        return (
            <div>
            <h3>Parking Spots</h3>
            <Search handleSearch={this.handleSearch}/>
            {this.renderFind(listOfParking, searchValue)}
            </div>
        )
    }
}
