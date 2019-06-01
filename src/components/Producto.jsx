import React, { Component } from "react";

class Producto extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  deleteP = () => {
    console.log(this.props.producto.nombre);
    this.props.deleteProduct(this.props.producto.id);
  }

  editP = (event) => {
    event.preventDefault();
    const productoEditado = {
      'id': this.props.producto.id,
      'nombre': this.state.name,
      'precio': Number(this.state.price)
    }
    this.props.editProduct(productoEditado);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    const { producto } = this.props;
    return (
      <li>
        <p>{producto.nombre}</p>
        <button onClick={() => {
          console.log(this.props.producto.nombre);
          this.props.deleteProduct(this.props.producto.id);
        }}>Eliminar</button>
        <button onClick={this.editP}>
          Editar
        </button>

        <form onSubmit={this.editP}>
          <label>
            Nombre:
            <input onChange={this.handleChange} value={this.state.name} type="text" name="name" />
          </label>
          <label>
            Precio:
            <input onChange={this.handleChange} value={this.state.price} type="number" name="price" />
          </label>
          <input type="submit" value="Guardar" />
        </form>
      </li>
    );
  }
}

export default Producto;