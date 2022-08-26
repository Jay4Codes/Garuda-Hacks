import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <section className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-12 col-sm-4">
              <div className="contact-number">
                <i className="tf-ion-ios-telephone"></i>
                <span>Dummy Text</span>
              </div>
            </div>
            <div className="col-md-4 col-xs-12 col-sm-4">
              <div className="logo text-center">
                <Link to="/">
                  <img src="" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-md-4 col-xs-12 col-sm-4">
              <ul className="top-menu text-right list-inline">
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li className="dropdown search dropdown-slide">
                  <a
                    href="#!"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    <i className="tf-ion-ios-search-strong"></i> Search
                  </a>
                  <ul className="dropdown-menu search-dropdown">
                    <li>
                      <form action="post">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search..."
                        />
                      </form>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="menu">
        <nav className="navbar navigation">
          <div className="container">
            <div className="navbar-header">
              <h2 className="menu-title">Main Menu</h2>
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>

            <div id="navbar" className="navbar-collapse collapse text-center">
              <ul className="nav navbar-nav">
                <li className="dropdown ">
                  <Link to="/">Home</Link>
                </li>
                <li className="dropdown dropdown-slide">
                  <Link to="/waste-store">Waste Store</Link>
                </li>
                <li className="dropdown dropdown-slide">
                  <Link to="/product-store">Product Store</Link>
                </li>
                <li className="dropdown full-width dropdown-slide">
                  <Link to="/about">About</Link>
                </li>

                <li className="dropdown dropdown-slide">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Header;
