import React, { Component } from "react";
import { connect } from "react-redux";
import { mostrarProductos, eliminarProducto, editarProducto, crearProducto } from "../actions/productionsActions";


import Producto from "./Producto";
class Productos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  componentDidMount() {
    this.props.mostrarProductos();
  }

  deleteProduct(key) {
    console.log('EN OTRO LADO', key);
    this.props.eliminarProducto(key);
  }

  crearP = (event) => {
    event.preventDefault();
    const productoACrear = {
      'id': this.props.productos.length,
      'nombre': this.state.name,
      'precio': Number(this.state.price)
    }
    this.props.crearProducto(productoACrear);
  }


  render() {
    const { productos } = this.props;
    return (
      <div>
        <h1>CREA UN NUEVO PRODUCTO</h1>

        <form onSubmit={this.crearP}>
          <label>
            Nombre:
            <input onChange={this.handleChange} value={this.state.name} type="text" name="name" />
          </label>
          <label>
            Precio:
            <input onChange={this.handleChange} value={this.state.price} type="number" name="price" />
          </label>
          <input type="submit" value="Crear" />
        </form>


        <h1>Listado de productos</h1>
        {productos.map((producto, index) => {
          return <Producto
            key={index}
            producto={producto}
            deleteProduct={() => {
              this.props.eliminarProducto(index);
            }}
            editProduct={(pr) => {
              this.props.editarProducto(pr);
            }}
          />;
        })}
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    productos: state.productos.productos
  };
};

export default connect(mapStateToProp, { mostrarProductos, eliminarProducto, editarProducto, crearProducto })(Productos);