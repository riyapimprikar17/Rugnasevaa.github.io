import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class HosSel extends Component {
  render() {
    return (
      <div className="d-flex flex-row m-5">
        <div className="m-2 card" style={{ width: "18rem" }}>
          <img
            src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=600"
            class="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="text-center card-text">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Patient"
              >
                Hospital 1
              </Link>
            </p>
          </div>
        </div>
        <div className="m-2 card" style={{ width: "18rem" }}>
          <img
            src="https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=600"
            class="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="text-center card-text">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Patient"
              >
                Hospital 2
              </Link>
            </p>
          </div>
        </div>
        <div className="m-2 card" style={{ width: "18rem" }}>
          <img
            src="https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg?auto=compress&cs=tinysrgb&w=600"
            class="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="text-center card-text">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Patient"
              >
                Hospital 3
              </Link>
            </p>
          </div>
        </div>
        <div className="m-2 card" style={{ width: "18rem" }}>
          <img
            src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600"
            class="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="text-center card-text">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Patient"
              >
                Hospital 4
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HosSel;
