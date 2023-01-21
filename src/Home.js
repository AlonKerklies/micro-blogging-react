import React, { useState, useEffect, useContext } from "react";
import uuid from "react-uuid";
import WriteNote from "./components/WriteNote";
import NoteList from "./components/NoteList";
import { TweetContext } from "./contexts/TweetContext";
import { db } from "./firebase";
import { set, ref, onValue } from "firebase/database";
import { collection, addDoc, getDocs, onSnapshot } from "firebase/firestore";

function Home({}) {
  //משתנים בשימוש גלובלי
  const { setToggleSpinner } = useContext(TweetContext);
  const { textArea, setTextArea } = useContext(TweetContext);

  //משתנים בשימוש מקומי
  const [prevTweets, setPrevTweets] = useState([]);
  const [tweet, setTweet] = useState([]);
  const currentDate = new Date();

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
      date: currentDate.toLocaleString(),
      userID: localStorage.getItem("userID"),
    });

    // localStorage.setItem("userID", takeItForStore.id);
    // console.log(localStorage.getItem("userID") )
    // localStorage.setItem("userName", inputName);
    // console.log(localStorage.getItem("userName") )

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
      // console.log(tweetWithIdFromServer);
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
