// React Imports
import React, { useEffect, useState } from "react";
import Fade from "react-reveal";

// Components Imports
import Footer from "../Footer";
import Header from "../Headers/Header";
import ScrollToTop from "../ScrollToTop";

// CSS Imports
import "./Modal.css";

function WasteStore() {
  const [wastes, setWastes] = useState();
  const [loading, setLoading] = useState(true);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  useEffect(() => {
    const getWaste = async () => {
      const res = await fetch("http://localhost:5000/api/waste/getwaste", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const json = await res.json();
      setWastes(json);
      setLoading(false);
    };
    getWaste();
  }, [modal]);

  const purchaseProduct = async () => {
    const res = await fetch("http://localhost:5000/api/waste/buywaste", {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      // body : JSON.stringify({name : name, quantity : quantity})
    });
    const json = await res.json();
  };

  const WasteItem = (props) => {
    console.log(props);
    return (
      <div className="col-md-4">
        <div className="product-item">
          <div className="product-thumb">
            <span className="bage">Sale</span>
            <img
              className="img-responsive"
              src="images/shop/products/product-1.jpg"
              alt="product-img"
            />
            <div className="preview-meta">
              <ul>
                <li>
                  <a href="https://garudahacks.com/">
                    <i className="tf-ion-ios-heart"></i>
                  </a>
                </li>
                <li>
                  <span data-toggle="modal" data-target="#product-modal">
                    <a onClick={toggleModal} className="btn-modal">
                      <i className="tf-ion-android-cart"></i>
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-content">
            <h4>
              <a href="product-single.html">{props.name}</a>
            </h4>
            <p className="price">{props.price} Points</p>
            <p className="price">Available Quantity : {props.quantity}kg</p>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return <div>Loading</div>;
  } else {
    console.log(wastes);
    return (
      <div>
        <Header />
        <ScrollToTop />
        <Fade bottom cascade>
          {modal ? <itemModal /> : <></>}
          <section className="products section">
            <div className="container">
              <div className="row">
                <h1 className="page-title text-center">Waste Store</h1>
                <br />
                {wastes.map((waste) => {
                  return (
                    <WasteItem
                      name={waste.name}
                      price={waste.price}
                      quantity={waste.quantity}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        </Fade>

        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal product-modal fade" id="product-modal">
              <button
                type="button"
                className="close close-modal"
                data-dismiss="modal"
                aria-label="Close"
                onClick={toggleModal}
              >
                <i className="tf-ion-close"></i>
              </button>
              <div className="modal-dialog " role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-8 col-sm-6 col-xs-12">
                        <div className="modal-image">
                          <img className="img-responsive" src="" alt="item" />
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="product-short-details">
                          <h2 className="product-title">asdasd</h2>
                          <p className="product-price">asd</p>
                          <input type="number" placeholder="Quantity" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default WasteStore;
