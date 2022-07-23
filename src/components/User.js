
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
export default function Contact() {

  const navigate = useNavigate();
  const goToContact = () =>{
    navigate("/Contact");
  }
  let location = useLocation();
 

  return (
    <>
      <h1> Hi main User Page par hun </h1>
      <p> My current location is {location.pathname}</p>
      <button className="btn btn-primary mx-2" onClick={ () => goToContact()}>Go to Contact Page</button>
      <button className="btn btn-primary mx-2" onClick={ () => navigate(-1)}>Go Back</button>
    </>
  );
}
