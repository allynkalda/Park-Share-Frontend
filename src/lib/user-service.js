import axios from "axios";

class UserService {
  constructor(props) {
    this.userservice = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true
    });
    console.log(this.props)
  }

  getparking() {
    return this.userservice
      .get('/profile')
      .then(({ data }) => data);
  }


}

const userservice = new UserService();

export default userservice;
