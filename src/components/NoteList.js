import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import uuid from "react-uuid";
const baseURL = "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";

function NoteList({ noteListFromServer, setNoteListFromServer, makefetch }) {
  console.log("start note map");
  

const fetchData = () => {
axios.get(baseURL).then(({ data }) => setNoteListFromServer(data.tweets))}
 

// const fetchData = async  () => {
// const {data} = await
//  axios.get(baseURL)
// setNoteListFromServer(data.tweets);
// }
 
  useEffect(() => {
    fetchData();
  },[makefetch]);


  return (
    // <div className="NoteList note-pack ">
      < >
        {noteListFromServer.map((note) => (
          <div className="bg-color-grey-dark  note-in-pack    mt-3 p-3  pt-4  pb-2  rounded" key={uuid()}>
             <div className="note-in-pack-title  d-flex  ">
             <p className="  pe-2">{note.userName}</p> {/* כותרת */}
             </div>
             <p className="color-white">{note.content}</p> {/* תוכן הודעה */}
             <p className="note-date  "> Created at: {note.date} </p>{" "}
          </div>     
        ))}
      </ >
  );   
} console.log("end note map");
export default NoteList;

