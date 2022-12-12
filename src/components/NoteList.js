import React, { useState, useEffect, useContext } from "react";
import { TweetContext } from "../contexts/TweetContext";
import axios from "axios";
import uuid from "react-uuid";

import { db } from "../firebase";
import { set, ref, onValue } from "firebase/database";

// const baseURL =
//   "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";

function NoteList() {
  //{ makefetch}
  console.log("start notelist");

  //משתנים בשימוש גלובלי
  const { noteListFromServer, setNoteListFromServer } =
    useContext(TweetContext);

  // const fetchData = () => {
  //   axios.get(baseURL).then(({ data }) => setNoteListFromServer(data.tweets)); };
 
  // לקרוא מהשרת
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setNoteListFromServer([]);
      const data = snapshot.val();
      console.log(noteListFromServer);
      if (data !== null) {
        Object.values(data).map((zzz) => {
          setNoteListFromServer((oldArray) => [zzz, ...oldArray]);
        });
      }
    });
  }, []);



  return (
    <>
      {noteListFromServer.map((ttt) => (
        <div
          className="bg-color-grey-dark  note-in-pack    mt-3 p-3  pt-4  pb-2  rounded"
          key={uuid()}
        >
          <div className="note-in-pack-title  d-flex  ">
            <p className="pe-2">{ttt.tweet.userName}</p> {/* כותרת */}
          </div>
          <p className="color-white">{ttt.tweet.content}</p> {/* תוכן הודעה */}
          <p className="note-date  "> Created at: {ttt.tweet.date} </p>{" "}
        </div>
      ))}
    </>
  );

  // return (
  //   <>
  //     {noteListFromServer.map((note) => (
  //       <div
  //         className="bg-color-grey-dark  note-in-pack    mt-3 p-3  pt-4  pb-2  rounded"
  //         key={uuid()}
  //       >
  //         <div className="note-in-pack-title  d-flex  ">
  //           <p className="pe-2">{note.userName}</p> {/* כותרת */}
  //         </div>
  //         <p className="color-white">{note.content}</p> {/* תוכן הודעה */}
  //         <p className="note-date  "> Created at: {note.date} </p>{" "}
  //       </div>
  //     ))}
  //   </>
  // );
}

console.log("end note map");
export default NoteList;
