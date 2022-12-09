import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import Profile from "./Profile";
import { BrowserRouter, Route, useNavigate, Routes, Link, NavLink  } from "react-router-dom";
import TweetContextProvider from "./components/TweetContext";



import {db} from "./firebase";
import {uid} from "uid";
import uuid from "react-uuid";
import {set, ref} from "firebase/database";
// // import { set, ref, onValue, remove, update } from "firebase/database";





function App() {

  const [toDo , setToDo] = useState("");
  const handleTodoChange = (e) => {
    setToDo(e.target.value)
  }
    
   const writeToDatabase = () => {
    // id: uuid(),
    const uuid = uid()
    set(ref(db,`/${uuid}`),{
      toDo,
      uuid,
      
    })
  };






  return (
    <div className="">

<input type="text" value={toDo} onChange={handleTodoChange}/>
<button onClick={writeToDatabase}>submit</button>




      <ul className="d-flex justify-content-start   ms-5 me-5  bg-color-grey-dark rounded-bottom   navbar ">
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
      </ul>
      <TweetContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </TweetContextProvider>
    </div>
  );
}

export default App;
