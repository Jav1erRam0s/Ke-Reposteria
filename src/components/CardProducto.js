import React from "react";
import "../styles/CardProducto.css";
import DetalleProducto from "./DetalleProducto.js";

class CardProducto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      estadoModal: false,
    };
  }

  showDetails = () => {
    this.setState({ estadoModal: true });
  };

  closeModal = () => {
    this.setState({ estadoModal: false });
  };

  formatoPrecio(precio) {
    return precio.toLocaleString("de-AR");
  }

  render() {
    const producto = this.props.producto;
    const precio = this.props.precio;

    return (
      <React.Fragment>
        <div className="card card-producto" style={{background: "whitesmoke"}} onClick={this.showDetails}>
          <div className="card-producto-foto">
            <img src={producto.fotos[0]} alt={producto.titulo} />
            <div className="card-producto-titulo-sobre-foto">{producto.titulo}</div>
          </div>
          <div className="card-body">
            <p className="card-text">
              <h5 className="card-producto-titulo">
                <b>{producto.titulo}</b>
              </h5>
              <div className="card-producto-precio row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <b>$ {this.formatoPrecio(precio)}</b>
                </div>
              </div>
            </p>
          </div>
        </div>

        <DetalleProducto
          producto={producto}
          estadoModal={this.state.estadoModal}
          closeModal={this.closeModal}
        />
      </React.Fragment>
    );
  }
}

export default CardProducto;
