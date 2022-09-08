import axios from "axios";

export const api = axios.create({
  baseURL: "https://devburguersapi.herokuapp.com/",
});

export function dataGet() {
  try {
    api.post("/pedidos", dataForm).then((response) => {
      console.log(response.data);
    });
  } catch (e) {
    console.log(e);
  }
}

export function dataPost(dataForm) {
  try {
    api.post("/pedidos", dataForm).then((response) => {
      console.log(response.data);
    });
  } catch (e) {
    console.log(e);
  }
}

export function dataPatch(dataForm) {
  try {
    api.post("/pedidos", dataForm).then((response) => {
      console.log(response.data);
    });
  } catch (e) {
    console.log(e);
  }
}


export function dataDelete(dataForm) {
  try {
    api.post("/pedidos", dataForm).then((response) => {
      console.log(response.data);
    });
  } catch (e) {
    console.log(e);
  }
}

