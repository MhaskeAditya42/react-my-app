
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
      <h1 className='display-3'> Welcome to IEEE Web ETP !! </h1>
      <h2 className='display-4'>We are on user page now </h2>
      <p className='h3'> My current location is {location.pathname}</p>
      <button className="btn btn-primary mx-2" onClick={ () => goToContact()}>Go to Contact Page</button>
      <button className="btn btn-primary mx-2" onClick={ () => navigate(-1)}>Go Back</button>
    </>
  );
}
