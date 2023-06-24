import React from "react";
import "../styles/Productos.css";

import axios from "axios";
import url from "../config/url.js";

class Productos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
    };
  }

  componentDidMount() {
    axios.get(`${url.path}/productos.json`).then((res) => {
      this.setState({
        productos: res.data,
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <div id="container-productos">
          <div id="container-producto-title">
            <span>Nuestros productos</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Productos;
