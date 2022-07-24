import React from "react";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <>
      <div className="container">
        <div
          className="card"
          
          style={{ width: "18rem" }}
        >
          <img className="card-img-top" src={`${process.env.PUBLIC_URL}/assets/Tokoyo.jpg`} alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title">Japan President has been shot dead </h5>
            <p className="card-text">
            Japans president Shinjo Abe has been shot dead during a rally. The murderer has been caught by the police and further process is going on.
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
