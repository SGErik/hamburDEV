import axios from "axios";

export const api = axios.create({
  baseURL: "https://devburguersapi.herokuapp.com/",
});
