import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }

  signup(user) {
    const { username, password, firstName, lastName, email, contact, image } = user;
    return this.auth
      .post("/auth/signup", { username, password, firstName, lastName, email, contact, image })
      .then(({ data }) => data);
  }

  login(user) {
    const { username, password } = user;
    return this.auth
      .post("/auth/login", { username, password })
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post("/auth/logout", {}).then(response => response.data);
  }

  me() {
    return this.auth.get("/auth/me").then(response => response.data);
  }

  imageUpload(file) {
    return this.auth.post('auth/signup/image', file)
    .then(({data}) => data)
  }

  
}

const auth = new Auth();

export default auth;
