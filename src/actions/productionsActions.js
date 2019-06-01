import { MOSTRAR_PRODUCTOS } from "./types";
import { ELIMINAR_PRODUCTO } from "./types";
import { EDITAR_PRODUCTO } from "./types";
import { CREAR_PRODUCTO } from "./types";
import axios from 'axios';


export const mostrarProductos = () => dispatch => {
  axios.get("https://my-json-server.typicode.com/ricardovejarano/fake-rest/productos")
    .then(respuesta => {
      console.log(respuesta);
      dispatch({
        type: MOSTRAR_PRODUCTOS,
        payload: respuesta.data
      });
    });
};

export const eliminarProducto = (id) => {
  return { type: ELIMINAR_PRODUCTO, payload: id };
}

export const editarProducto = (producto) => {
  return { type: EDITAR_PRODUCTO, payload: producto }
}

export const crearProducto = (producto) => {
  return { type: CREAR_PRODUCTO, payload: producto }
}


