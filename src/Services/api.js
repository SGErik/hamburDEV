import axios from "axios";

export const api = axios.create({
  baseURL: "https://devburguersapi.herokuapp.com/",
});

export async function dataGet(setDados,dados) {
  try {
   await api.get("/pedidos").then((response) => {
      setDados(response.data);
      return dados
    });
  } catch (e) {
    console.log(e);
  }
}

export async function dataPost(dataForm) {
  try {
    api.post("/pedidos", dataForm).then((response) => {
      console.log(response.data);
    });
  } catch (e) {
    console.log(e);
  }
}

export async function dataPatch(dataForm) {
  try {
    api.post("/pedidos", dataForm).then((response) => {
      console.log(response.data);
    });
  } catch (e) {
    console.log(e);
  }
}


export async function dataDelete(pedido) {
  try {
    await api.delete(`/pedidos/id/${pedido}`)
  } catch (e) {
    console.log(e);
  }
}

