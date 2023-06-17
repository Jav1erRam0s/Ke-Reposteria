import React from "react";
import "../styles/Navegador.css";
import Favicon from "../images/Navegador/simbolo.png";
import { darkMode } from "../utils/darkmode.js";

class Navegador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modedark: false,
    };
  }

  toggleCheckbox() {
    /* Cambiar modo claro a oscuro y viceversa */
    darkMode();
    /* Cambiar estado */
    this.setState({
      modedark: !this.state.modedark,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div id="container-navegador" href="/Ke-Reposteria/#">
          <div className="flex-container">
            <a href="/Ke-Reposteria/#">
              <img src={Favicon} className="img-favicon" alt="..." />
            </a>
            <span id="name-app">Ke Reposteria</span>
            <input
              className="push"
              type="checkbox"
              defaultChecked={this.state.modedark}
              onChange={() => this.toggleCheckbox()}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navegador;
