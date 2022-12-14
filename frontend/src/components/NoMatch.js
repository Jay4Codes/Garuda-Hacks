// React Imports
import React from "react";
import { Link } from "react-router-dom";

// Image Imports
import hori_logo from "../assets/images/hori_logo.png";

function NoMatch() {
  return (
    <div>
      <section className="page-404">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/">
                <img src={hori_logo} alt="site logo" />
              </Link>
              <h1>404</h1>
              <h2>Page Not Found</h2>
              <Link to="/" className="btn btn-main btn-link">
                <i className="tf-ion-android-arrow-back"></i> Go Home
              </Link>
              <p className="copyright-text">
                © 2022 Team MangoDB All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NoMatch;
