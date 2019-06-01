import { MOSTRAR_PRODUCTOS } from "../actions/types";
import { ELIMINAR_PRODUCTO } from "../actions/types";
import { EDITAR_PRODUCTO } from "../actions/types";
import { CREAR_PRODUCTO } from "../actions/types";


const estadoInicial = {
  productos: []
};


export default function (state = estadoInicial, action) {
  switch (action.type) {
    case MOSTRAR_PRODUCTOS:
      return { ...state, productos: action.payload };
    case ELIMINAR_PRODUCTO:
      return {
        ...state, productos: state.productos.filter(producto => producto.id !== action.payload)
      }
    case EDITAR_PRODUCTO:
      return {
        ...state, productos: state.productos.map(producto => producto.id === action.payload.id ?
          (producto = action.payload) : producto)
      }
    case CREAR_PRODUCTO:
      return { ...state, productos: [...state.productos, action.payload] };
    default:
      return state;
      break;
  }
}