import React from "react";
import Navegador from "./containers/Navegador.js";
import Presentacion from "./containers/Presentacion.js";
import Productos from "./containers/Productos.js";
import Promos from "./containers/Promos.js";
import Footer from "./containers/Footer.js";

function SPA() {
  return (
    <React.Fragment>
      <Navegador />
      <Presentacion />
      <Promos />
      <Productos />
      <Footer />
    </React.Fragment>
  );
}

export default SPA;
