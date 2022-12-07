import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import Profile from "./Profile";
import { BrowserRouter,Route,useNavigate,Routes, Link, NavLink  } from "react-router-dom";


function App() {
  
 
 
  return (
    <div className="">

<ul className="d-flex justify-content-start   ms-5 me-5  bg-color-grey-dark rounded-bottom   navbar ">
<li className=" p-2 ps-5"> <NavLink className="nav-bar-link" to="/"    >Home</NavLink></li>
<li className=" p-2 ps-5" ><NavLink className="nav-bar-link"

to="/Profile"  >Profile</NavLink></li>
</ul>   
           <Routes>
            <Route path="/" element={<Home /> }            /> 
            <Route path="/Profile" element={<Profile /> }              />     
           </Routes>

      </div>
  );
}



export default App;
