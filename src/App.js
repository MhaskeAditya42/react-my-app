import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Contact from "./components/Contact";
import Error from "./components/Error";
import User from "./components/User";
import Card from "./components/Card";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <>
      <Router>
        <Navbar></Navbar>    
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About/>}></Route>  {/**  Diifrence between path and exact path */}
            <Route exact path="/" element={<TextForm/>}></Route>
            <Route exact path="/Contact" element={<Contact/>}></Route>   {/**  Diifrence between component and element */}
            <Route exact path="/User" element={<User/>}></Route>
            <Route exact path="/Card" element={<Card/>}></Route>
            <Route element={<Error/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
