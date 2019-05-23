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
    const { location, district, spaceFor, date, description } = info;
    return this.rentpark
      .post('/rentparking', { location, district, spaceFor, date, description })
      .then(({ data }) => data);
  }

  getparking() {
    return this.rentpark
      .get('/findparking')
      .then(({ data }) => data);
  }

  postmessageform(info) {
    const { message, id } = info;
    return this.rentpark
      .post(`/message/${id}`, { message })
      .then(({ data }) => data);
  }
  
  getmessages() {
    return this.rentpark
      .get('/mymessages')
      .then(({ data }) => data);
  }

}

const rentpark = new RentPark();

export default rentpark;
