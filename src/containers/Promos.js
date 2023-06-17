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
        promos: res.data,
        statusPromos: true,
      });

      const cantidadDeSlides = Math.ceil(
        this.state.promos.length / this.state.cantidadPromosxSlide
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
            <span>Lleve mas, pague menos</span>
          </div>
          {/* Carousel */}
          <div id="carousel-promos">
            <div
              id="carouselExampleIndicators"
              class="carousel slide carousel-slide"
              data-bs-interval="false"
            >
              <div class="carousel-inner carousel-body">
                {this.state.statusPromos === true &&
                  this.state.slides.map((idSlide, index) => {
                    let inicio = index * this.state.cantidadPromosxSlide;
                    let fin = (index + 1) * this.state.cantidadPromosxSlide - 1;
                    if (idSlide === 1) {
                      return (
                        <div class="carousel-item active">
                          <div class="row p-2">
                            {this.state.promos.map((element, index) => {
                              if (inicio <= index && index <= fin) {
                                return (
                                  <div class="col-6 col-md-6 col-lg-3 mb-4">
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
                        <div class="carousel-item">
                          <div class="row p-2">
                            {this.state.promos.map((element, index) => {
                              if (inicio <= index && index <= fin) {
                                return (
                                  <div class="col-6 col-md-6 col-lg-3 mb-4">
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
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
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
