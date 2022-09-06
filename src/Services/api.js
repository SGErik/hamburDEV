import axios from "axios";

export const api = axios.create({
  baseURL: "https://devburguersapi.herokuapp.com/",
});

export default function dataPost(dataForm) {
  try {
    api.post("/pedidos", dataForm).then((response) => {
      console.log(response.data);
    });
  } catch (e) {
    console.log(e);
  }
}
