import React from "react";
import "../styles/Productos.css";

import CardProducto from "../components/CardProducto.js";

import axios from "axios";
import url from "../config/url.js";

class Productos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      materias_primas: [],
      productosPage: [],
      cantidadProductosPage: 8,
      paginacion: [],
      actualPage: 1,
      statusProductos: false,
    };
  }

  loadProductos() {
    axios.get(`${url.test}/productos.json`).then((res) => {
      var response = res.data.sort(function (a, b) {
        if (a.ganancia > b.ganancia) return 1;
        else if (a.ganancia < b.ganancia) return -1;
        else return 0;
      });

      this.setState({
        productos: response,
        statusProductos: true,
        productosPage: response.slice(
          (this.state.actualPage - 1) * this.state.cantidadProductosPage,
          this.state.actualPage * this.state.cantidadProductosPage
        ),
      });

      const cantidadDePaginas = Math.ceil(
        response.length / this.state.cantidadProductosPage
      );
      var list = [];
      for (var i = 1; i <= cantidadDePaginas; i++) {
        list.push(i);
      }

      this.setState({ paginacion: list });
    });
  }

  loadMateriasPrimas() {
    axios.get(`${url.test}/materias_primas.json`).then((res) => {
      this.setState({
        materias_primas: res.data,
      });
    });
  }

  componentDidMount() {
    this.loadProductos();
    this.loadMateriasPrimas();
  }

  /* Metodos paginacion */

  goToPage(page) {
    this.setState({
      actualPage: page,
      productosPage: this.state.productos.slice(
        (page - 1) * this.state.cantidadProductosPage,
        page * this.state.cantidadProductosPage
      ),
    });
  }

  previousPage() {
    const nuevaPage = this.state.actualPage - 1;
    if (nuevaPage >= 1) {
      this.goToPage(nuevaPage);
    }
  }

  nextPage() {
    const cantidadPaginas = this.state.paginacion.length;
    const nuevaPage = this.state.actualPage + 1;
    if (nuevaPage <= cantidadPaginas) {
      this.goToPage(nuevaPage);
    }
  }

  cotizarProducto(producto) {
    var total = 0;

    const ingredientes_producto = producto.ingredientes;
    const materias_primas = this.state.materias_primas;
    var arr_mp = [];
    for (const key in materias_primas) {
      arr_mp.push(materias_primas[key]);
    }

    //Sumamos el costo de produccion
    for (const key in ingredientes_producto) {
      const ingrediente = ingredientes_producto[key];
      var element_mp = arr_mp.find(item => item.nombre === ingrediente.nombre);
      if( element_mp !== undefined ){
        const ingr_cant = ingrediente.cantidad;
        const ingr_mp_cant = element_mp.cantidad;
        const ingr_mp_precio = element_mp.precio;
        const costo = (ingr_cant * ingr_mp_precio) / ingr_mp_cant;
        total = total + costo;
      }
    }
    //Sumamos gastos extra
    if ( producto.extra !== undefined ){
      total = total + Object.values(producto.extra).reduce((a, b) => a + b);
    }
    //Sumamos la ganancia
    total = total + producto.ganancia;

    return total;
  }

  render() {
    return (
      <React.Fragment>
        <a name="irArriba" href="up">
          {""}
        </a>
        <div id="container-productos">
          <div id="container-producto-title">
            <span>🍰 Nuestros productos 🥐</span>
          </div>
          {/* Lista de productos */}
          <div className="row p-2">
            {this.state.statusProductos === true &&
              this.state.productosPage.map((element, index) => {
                return (
                  <span className="col-6 col-md-6 col-lg-3 mb-4" key={index}>
                    <CardProducto
                      producto={element}
                      precio={this.cotizarProducto(element)}
                    />
                  </span>
                );
              })}
          </div>
          {/* BARRA DE PAGINACION */}
          <div className="row">
            {this.state.statusProductos === true &&
              this.state.paginacion.length >= 2 && (
                <nav aria-label="Page navigation example">
                  <ul className="barra nav-pagination pagination justify-content-center fuente-pagination">
                    <li className="page-item">
                      <a href="#irArriba" className="anclaje">
                        <button
                          className="page-link"
                          style={{ background: "whitesmoke" }}
                          onClick={() => this.previousPage()}
                          aria-label="Previous"
                        >
                          <span aria-hidden="true" className="buttonControl">
                            <b>&laquo;</b>
                          </span>
                        </button>
                      </a>
                    </li>

                    {this.state.statusProductos === true &&
                      this.state.paginacion.map((element, index) => {
                        return (
                          <li className="page-item">
                            <a href="#irArriba" className="anclaje">
                              <button
                                className="page-link"
                                style={{ background: "whitesmoke" }}
                                onClick={() => this.goToPage(element)}
                              >
                                <span className="buttonPage">{element}</span>
                              </button>
                            </a>
                          </li>
                        );
                      })}

                    <li className="page-item">
                      <a href="#irArriba" className="anclaje">
                        <button
                          className="page-link"
                          style={{ background: "whitesmoke" }}
                          onClick={() => this.nextPage()}
                          aria-label="Next"
                        >
                          <span aria-hidden="true" className="buttonControl">
                            <b>&raquo;</b>
                          </span>
                        </button>
                      </a>
                    </li>
                  </ul>
                </nav>
              )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Productos;
