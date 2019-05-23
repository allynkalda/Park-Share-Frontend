import axios from "axios";

class RentPark {
  constructor(props) {
    this.rentpark = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true
    });
    console.log(this.props)
  }
 
  postparkform(info) {
    const { location, district, spaceFor, date } = info;
    return this.rentpark
      .post('/rentparking', { location, district, spaceFor, date })
      .then(({ data }) => data);
  }

  getparking(info) {
    return this.rentpark
      .get('/findparking')
      .then(({ data }) => data);
  }

  getparkingDetails(props) {
    const { id } = this.props.match.params;
    console.log(props)
    return this.rentpark
      .get(`findparking/${id}`)
      .then(({ data }) => data);
  }
  

}

const rentpark = new RentPark();

export default rentpark;
