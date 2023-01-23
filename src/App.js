import "./App.css";
import Home from "./Home";
import Profile from "./Profile";
import { Route, Routes, NavLink } from "react-router-dom";
import TweetContextProvider from "./contexts/TweetContext";
import Signup from "./signup";
import Login from "./Login";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoutes from "./PrivateRoutes";
import { auth } from "./firebase";
import React, { useState, useEffect, useContext } from "react";

function App() {

  const cheaklocal =  () => {
    console.log( localStorage.getItem("userID" ));
    if (localStorage.getItem("userID" ) === null){
      localStorage.setItem("userID", 0 )
    };

  }
  useEffect(() => {
    cheaklocal();
  }, []);

  
  console.log("auth.currentUser", auth.currentUser);

  return (
    <>
      <AuthProvider>
        <ul
          className="
      d-flex justify-content-start   ms-5 me-5  bg-color-grey-dark rounded-bottom   navbar "
        >
          <li className=" p-2 ps-5">
            <NavLink className="nav-bar-link" to="/">
              Home
            </NavLink>
          </li>
          <li className=" p-2 ps-5">
            <NavLink className="nav-bar-link" to="/Profile">
              Profile
            </NavLink>
          </li>
          <li className="ms-auto p-2  ">
            <NavLink className="nav-bar-link" to="/log">
              logIn
            </NavLink>
          </li>

          <li className="  p-2 me-5">
            <NavLink className="nav-bar-link" to="/Signup">
              signUp
            </NavLink>
          </li>
        </ul>

        <TweetContextProvider>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="/Profile" element={<Profile />} />
            </Route>
            <Route path="/log" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </TweetContextProvider>
      </AuthProvider>
    </>
  );
}

export default App;
