import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Input } from "reactstrap";
import "../styles/DetallePromo.css";

class DetallePromo extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    this.props.closeModal();
  }

  render() {
    const slides = this.props.promo.fotos.map((item, index) => {
      return (
        <div>
          {index === 0 && (
            <div className="carousel-item active carousel-item-slide">
              <img src={item} alt={item.index} />
            </div>
          )}
          {index !== 0 && (
            <div className="carousel-item carousel-item-slide">
              <img src={item} alt={item.index} />
            </div>
          )}
        </div>
      );
    });

    return (
      <React.Fragment>
        <Modal isOpen={this.props.estadoModal} centered>
          <ModalHeader
            toggle={this.handleSave}
            cssModule={{ "modal-title": "w-100 text-center m-0" }}
          >
            <span className="modal-promo-titulo">
              <b>{this.props.promo.titulo}</b>
            </span>
          </ModalHeader>
          <ModalBody>
            <div
              id="carousel-Actions-Details-Indicators"
              className="carousel slide"
              data-bs-interval="false"
            >
              <div className="carousel-inner">{slides}</div>

              {this.props.promo.fotos.length >= 2 && (
                <div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel-Actions-Details-Indicators"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel-Actions-Details-Indicators"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              )}
            </div>
            <Input
              readOnly
              id="modal-promo-descripcion"
              type="textarea"
              name="text"
              value={this.props.promo.descripcion}
            />
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default DetallePromo;
