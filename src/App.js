import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import Profile from "./Profile";
import {
  BrowserRouter,
  Route,
  useNavigate,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import TweetContextProvider from "./contexts/TweetContext";
import Signup from "./signup";
import Login from "./Login";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoutes from "./PrivateRoutes";

function App() {
  return (
    <>
      <AuthProvider>
        <ul
          className="
      d-flex justify-content-start   ms-5 me-5  bg-color-grey-dark rounded-bottom   navbar "
          // className="
          // d-flex bg-light mb-3"
        >
          <li className=" p-2 ps-5">
            {" "}
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

        {/* <Signup /> */}

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
