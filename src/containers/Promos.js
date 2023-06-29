import React from "react";
import "../styles/Promos.css";

import CardPromo from "../components/CardPromo";

import axios from "axios";
import url from "../config/url.js";

class Promos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promos: [],
      slides: [],
      cantidadPromosxSlide: 4,
      statusPromos: false,
    };
  }

  loadPromos() {
    axios.get(`${url.path}/promos.json`).then((res) => {
      this.setState({
        promos: res.data.sort(function (a, b) {
          if (a.precio > b.precio) return 1;
          else if (a.precio < b.precio) return -1;
          else return 0;
        }),
        statusPromos: true,
      });

      var cantPromos = res.data.length;

      const cantidadDeSlides = Math.ceil(
        cantPromos / this.state.cantidadPromosxSlide
      );
      var list = [];
      for (var i = 1; i <= cantidadDeSlides; i++) {
        list.push(i);
      }

      this.setState({ slides: list });
    });
  }

  componentDidMount() {
    this.loadPromos();
  }

  render() {
    return (
      <React.Fragment>
        <div id="container-promos">
          <div id="container-promo-title">
            🎀<span id="txt-title-promo">Promociones</span>🎉
          </div>
          <div id="container-promo-subtitle">
            Regalos, reconciliaciones, san valentin, cumpleaños, bautismos, ... todo lo que
            necesitas para llevar un set de productos a un menor precio.
          </div>
          {/* Carousel */}
          <div id="carousel-promos">
            <div
              id="carouselExampleIndicators"
              className="carousel slide carousel-slide"
              data-bs-interval="false"
            >
              <div className="carousel-inner carousel-body">
                {this.state.statusPromos === true &&
                  this.state.slides.map((idSlide, index) => {
                    let inicio = index * this.state.cantidadPromosxSlide;
                    let fin = (index + 1) * this.state.cantidadPromosxSlide - 1;
                    if (idSlide === 1) {
                      return (
                        <div className="carousel-item active">
                          <div className="row p-2">
                            {this.state.promos.map((element, index) => {
                              if (inicio <= index && index <= fin) {
                                return (
                                  <div className="col-6 col-md-6 col-lg-3 mb-4">
                                    <CardPromo promo={element} />
                                  </div>
                                );
                              } else {
                                return "";
                              }
                            })}
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div className="carousel-item">
                          <div className="row p-2">
                            {this.state.promos.map((element, index) => {
                              if (inicio <= index && index <= fin) {
                                return (
                                  <div className="col-6 col-md-6 col-lg-3 mb-4">
                                    <CardPromo promo={element} />
                                  </div>
                                );
                              } else {
                                return "";
                              }
                            })}
                          </div>
                        </div>
                      );
                    }
                  })}
              </div>
              {this.state.slides.length >= 2 && (
                <div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
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
                    data-bs-target="#carouselExampleIndicators"
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
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Promos;
