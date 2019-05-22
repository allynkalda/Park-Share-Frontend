import axios from "axios";

class RentPark {
  constructor() {
    this.rentpark = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true
    });
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

}

const rentpark = new RentPark();

export default rentpark;
