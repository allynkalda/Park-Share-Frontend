import axios from "axios";

class UserService {
  constructor(props) {
    this.userservice = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true
    });
  }

  getuser() {
    return this.userservice
      .get('/profile')
      .then(({ data }) => data);
  }

  edituser(info) {
    const { firstName, lastName, email, contact } = info;
    return this.userservice
      .post('/editprofile', { firstName, lastName, email, contact })
      .then(({ data }) => data)
      .catch(error => console.log(error))
  }


}

const userservice = new UserService();

export default userservice;
