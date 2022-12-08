
import React, { useState, useEffect, useContext } from "react";
import { TweetContext } from "./TweetContext";
import axios from "axios";
import uuid from "react-uuid";

const baseURL =
  "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";

function NoteList() 
    //{ makefetch}
 { console.log("start notelist");

 //משתנים בשימוש גלובלי
  const { noteListFromServer, setNoteListFromServer } = useContext(TweetContext);

  const fetchData = () => {
    axios.get(baseURL).then(({ data }) => setNoteListFromServer(data.tweets));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData()
       console.log("print");
    }, 2500);   
    //  return () => clearInterval(interval);
  }, []);

  //  useEffect(() => { 
  //   fetchData(); }, []);

  return (
    <>
      {noteListFromServer.map((note) => (
        <div
          className="bg-color-grey-dark  note-in-pack    mt-3 p-3  pt-4  pb-2  rounded"
          key={uuid()}
        >
          <div className="note-in-pack-title  d-flex  ">
            <p className="pe-2">{note.userName}</p> {/* כותרת */}
          </div>
          <p className="color-white">{note.content}</p> {/* תוכן הודעה */}
          <p className="note-date  "> Created at: {note.date} </p>{" "}
        </div>
      ))}
    </>
  );
}






console.log("end note map");
export default NoteList;
