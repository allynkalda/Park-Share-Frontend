import axios from "axios";

class UserService {
  constructor(props) {
    this.userservice = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }

  getuser() {
    return this.userservice
      .get('/api/profile')
      .then(({ data }) => data);
  }

  edituser(info) {
    const { firstName, lastName, email, contact } = info;
    return this.userservice
      .post('/api/editprofile', { firstName, lastName, email, contact })
      .then(({ data }) => data)
      .catch(error => console.log(error))
  }


}

const userservice = new UserService();

export default userservice;
