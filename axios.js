import axios from "axios";

const API = axios.create({
  baseURL: "https://nin-authorization-system.onrender.com/api/auth",
});

export default API;