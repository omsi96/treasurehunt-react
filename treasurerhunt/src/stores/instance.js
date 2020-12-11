import axios from "axios";

const instance = axios.create({
  baseURL: "http://e6f11a479859.ngrok.io/",
});

export default instance;
