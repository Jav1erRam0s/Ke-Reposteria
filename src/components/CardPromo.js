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
        <div class="card" onClick={this.showDetails}>
          <div class="card-promo-foto">
            <img src={promo.fotos[0]} alt={promo.titulo} />
          </div>
          <div class="card-body">
            <p class="card-text">
              <h5 className="card-promo-titulo">
                <b>{promo.titulo}</b>
              </h5>
              <div class="card-promo-precio mt-3 row">
                <div class="col-lg-6 col-md-6 col-sm-12">
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
