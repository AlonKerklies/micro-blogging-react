import React, { useState, useEffect, useContext } from "react"; 
import uuid from "react-uuid";
import WriteNote from "./components/WriteNote";
import NoteList from "./components/NoteList";
import axios from "axios";
 import { TweetContext } from "./components/TweetContext";

 import {db} from "./firebase";
 import {set, ref, onValue, } from "firebase/database";

function Home({}) {
  console.log("start app page");

    //משתנים בשימוש גלובלי
    const {setToggleSpinner} = useContext(TweetContext);
    const { textArea, setTextArea } = useContext(TweetContext);

    //משתנים בשימוש מקומי
    const [prevTweets, setPrevTweets] = useState([]);
    const [newNoteAfterClick, setNewNoteAfterClick] = useState([]);
    const currentDate = new Date();

    const [toDo , setToDo] = useState("");
    const [toDos , setToDos] = useState([]) ;
  




  const baseURL =
    "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";

  function NoTextNote() {
    window.confirm("note’s text is mandatory");
  }




  const addNoteClick = () => {
    if (textArea.trim() === "") {
      return NoTextNote();
    } else {
    }

    //// מכניס הכל לפייר בייס
        set(ref(db,`/${currentDate}`),{
        content: textArea,
        userName: localStorage.getItem("userName"),
        date: currentDate.toISOString(),
        id: uuid(),
        })


    // setNewNoteAfterClick({
    //   content: textArea,
    //   userName: localStorage.getItem("userName"),
    //   date: currentDate.toISOString(),
    //   id: uuid(),
    // });

  };

  useEffect(() => {
    handleSubmit();
  }, [newNoteAfterClick]);

  const handleSubmit = () => {
    const isEmpty = Object.keys(newNoteAfterClick).length === 0;
    if (isEmpty === true) {
      return; } else {
      { console.log("a new tweet");}}
      setToggleSpinner(true);

    axios .post(baseURL, newNoteAfterClick)                          
// .then(({ data }) => setMakefetch(data)) // עדכון של השרת
.then(function (response) {
setPrevTweets([newNoteAfterClick, ...prevTweets]); //  שמירת הטוויטים הישנים  
                                        
        setToggleSpinner(false);   setTextArea("");
      })
      .catch(function (error) {
        setToggleSpinner(false);
        console.log(error.response.data.message);
      });
      
    
  };   console.log("end home. this is save tweets " , prevTweets  ); 

  return (
   
      <div className="container">
        <WriteNote
          addNoteClick={addNoteClick}   />

        <NoteList />
     
    </div>
  );
}

export default Home;
