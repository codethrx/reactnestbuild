import axios from "axios";
const todoendpoint = `http://localhost:8080`;
const todoInstance = axios.create({
  baseURL: todoendpoint,
});

export default todoInstance;
