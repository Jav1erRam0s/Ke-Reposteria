import React from "react";
import Foto from "../images/Presentacion/chef.png";
import "../styles/Presentacion.css";
import presentacion from "../videos/presentacion.mp4";
import GMail from "../images/Presentacion/gmail.png";
import WhatsApp from "../images/Presentacion/whatsapp.png";
import Instagram from "../images/Presentacion/instagram.png";

class Presentacion extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="body-presentacion">
          <div id="container-presentacion">
            <video src={presentacion} autoPlay loop muted></video>
            <div className="contain-info">
              <div className="row align-items-center">
                <div className="col-lg-4 offset-lg-8 col-md-4 offset-md-8">
                  <div className="foto-info">
                    <img src={Foto} alt="..." />
                  </div>
                  <p id="presentacion-txt-info">
                    <p>En Ke Repostería consideramos cada producto como arte que 
                    entregamos a nuestros compradores y amigos que confían en 
                    nosotros.</p>
                    <p>Escríbinos o contactanos de forma directa, y visita nuestro
                    instagram para ver nuestro trabajo.</p>
                  </p>
                  <div className="seguinos-info">
                    <a href="mailto:ke.reposteria@gmail.com" target="blank">
                      <img src={GMail} alt="GMail" />
                    </a>
                    <a href="https://wa.me/5491199999999" target="blank">
                      <img src={WhatsApp} alt="WhatsApp" />
                    </a>
                    <a
                      href="https://www.instagram.com/Ke.Reposteria"
                      target="blank"
                    >
                      <img src={Instagram} alt="Instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Presentacion;
