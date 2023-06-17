import React from "react";
import "../styles/Footer.css";

class Footer extends React.Component {
  anioActual() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <React.Fragment>
        <footer id="footer">
          <div className="container d-flex justify-content-center">
            <div className="row align-self-center text-center">
              <h6 id="copyright">
                <span id="name-app-footer">Ke Reposteria</span>
                <span className="simbol-c">©</span>
                {this.anioActual()} All Rights Reserved
              </h6>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
