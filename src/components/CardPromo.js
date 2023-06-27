import React from "react";
import "../styles/CardPromo.css";
import DetallePromo from "./DetallePromo.js";

class CardPromo extends React.Component {
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
    const promo = this.props.promo;

    return (
      <React.Fragment>
        <div className="card card-promo" onClick={this.showDetails}>
          <div className="card-promo-foto">
            <img src={promo.fotos[0]} alt={promo.titulo} />
            <div className="card-promo-titulo-sobre-foto">{promo.titulo}</div>
          </div>
          <div className="card-body">
            <p className="card-text">
              <h5 className="card-promo-titulo">
                <b>{promo.titulo}</b>
              </h5>
              <div className="card-promo-precio row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <b>$ {this.formatoPrecio(promo.precio)}</b>
                </div>
              </div>
            </p>
          </div>
        </div>

        <DetallePromo
          promo={promo}
          estadoModal={this.state.estadoModal}
          closeModal={this.closeModal}
        />
      </React.Fragment>
    );
  }
}

export default CardPromo;
