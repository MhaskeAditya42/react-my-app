import React from "react";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <>
      <div className="container">
        <div
          className="card"
          src={`${process.env.PUBLIC_URL}/assets/images/Tokoyo.jpg`}
          style={{ width: "18rem" }}
        >
          <img className="card-img-top" alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title">Japan President has been shot dead </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/Contact" className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
        
      </div>
    </>
  );
}
