import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import uuid from "react-uuid";
const baseURL = "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";

function NoteList({ noteListFromServer, setNoteListFromServer,   makefetch,
   }) {
  console.log("start note map");

// const currentDate = new Date();
const fetchData = async  () => {
const {data} = await axios.get(baseURL)
setNoteListFromServer(data.tweets);
}

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
}
export default NoteList;




  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setGetFromUrl(response.data);
  //     //   console.log(response.data.tweets[0].content  );
  //       // for (let i = 0; i < response.data.tweets.length ; i++) {  
  //        for (let i = 0; i < 8 ; i++) {    
  //           //  console.log(response.data.tweets[i].date  );
  //            const newNoteFromServer = {
  //             title:       response.data.tweets[i].userName  ,
  //             mainMassage: response.data.tweets[i].content ,
  //             noteDate:    response.data.tweets[i].date ,     };
  //             noteListFromServer.push(newNoteFromServer);
  //           }
  //             console.log(response.data.tweets[0]   );
              
  //   } ,[]);

  // },[  makefetch  ]);

  // if (!getFromUrl) return null;


