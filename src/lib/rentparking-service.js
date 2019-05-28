import axios from "axios";

class RentPark {
  constructor(props) {
    this.rentpark = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }

  getMapLocation() {
    return this.rentpark
      .get('/map')
      .then(({ data }) => data);
  }

  getparkingdetails(id) {
    return this.rentpark
      .get(`/findparking/${id}`)
      .then(({ data }) => data);
  }
 
  postparkmap({ info }) {
    return this.rentpark
      .post('/map', { info })
      .then(({ data }) => data)
  }

  postparkform(info) {
    const { location, district, spaceFor, date, description, image } = info;
    return this.rentpark
      .post('/rentparking', { location, district, spaceFor, date, description, image })
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

  getmymessages(id) {
    return this.rentpark
      .get(`/mymessages/${id}`)
      .then(({ data }) => data);
  }

  imageUpload(file) {
    return this.rentpark.post('/rentparking/image', file)
    .then(({data}) => data)
  }

}

const rentpark = new RentPark();

export default rentpark;
