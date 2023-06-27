import React from "react";
import Foto from "../images/Presentacion/jpfoto.jpg";
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean efficitur vel lorem vel facilisis. Curabitur
                    fringilla nulla est, tincidunt aliquet diam euismod nec.
                    Aliquam mollis ante vel nisi elementum, et euismod purus
                    euismod.
                  </p>
                  <div className="seguinos-info">
                    <a href="mailto:ke.reposteria@gmail.com" target="blank">
                      <img src={GMail} alt="GMail" />
                    </a>
                    <a href="https://wa.me/5491199999999" target="blank">
                      <img src={WhatsApp} alt="WhatsApp" />
                    </a>
                    <a
                      href="https://www.instagram.com/ke.reposteria"
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
