import React, { useState, useEffect, useContext } from "react";
import uuid from "react-uuid";
import WriteNote from "./components/WriteNote";
import NoteList from "./components/NoteList";
import { TweetContext } from "./contexts/TweetContext";
import { db } from "./firebase";
 
import { collection, addDoc, getDocs, onSnapshot } from "firebase/firestore";

function Home({}) {
  //משתנים בשימוש גלובלי
  const { setToggleSpinner } = useContext(TweetContext);
  const { textArea, setTextArea } = useContext(TweetContext);

  //משתנים בשימוש מקומי
  const [prevTweets, setPrevTweets] = useState([]);
  const [tweet, setTweet] = useState([]);
  const currentDate = new Date( )

 
  // const d = new Date(); // for now
  // const datetext =       d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
// console.log(datetext);

  // const baseURL =
  //   "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";

  function NoTextNote() {
    window.confirm("note’s text is mandatory");
  }

  const addNoteClick = () => {
    if (textArea.trim() === "") {
      return NoTextNote();
    } else {
    }
    setToggleSpinner(true); // מפעיל ספינר

    //  אלו הנתונים שהולכים לטוויט
    setTweet({
      content: textArea,
      userName: localStorage.getItem("userName"),
      date: currentDate.getTime(),  
      userID: localStorage.getItem("userID"),
      previewDate: currentDate.toLocaleString('he-il'),
    });


    // date: currentDate.toLocaleString('he-il'),
    // localStorage.setItem("userID", takeItForStore.id);
    // console.log(localStorage.getItem("userID") )
    // localStorage.setItem("userName", inputName);
    // console.log( 'tweet', tweet )

    // save to locallist
    setPrevTweets([tweet, ...prevTweets]);
  };


 


  useEffect(() => {
    handleSubmit();
  }, [tweet]);

  const handleSubmit = async () => {
    // console.log(tweet);

    try {
      const takeItForStore = await addDoc(collection(db, `tweets`), tweet);
      const tweetWithIdFromServer = { ...tweet, id: takeItForStore.id };
      
       console.log(takeItForStore);
        console.log(tweetWithIdFromServer);
      
    } catch (err) {
      console.log(err);
    }
    setToggleSpinner(false); // סוגר ספינר
  };

  return (
    <div className="container">
      <WriteNote addNoteClick={addNoteClick} />
      <NoteList />
    </div>
  );
}

export default Home;
