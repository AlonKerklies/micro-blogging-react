import React, { useState, useEffect, useContext } from "react";
import { TweetContext } from "../contexts/TweetContext";
import uuid from "react-uuid";
import { collection, getDocs, onSnapshot, query, orderBy, limit} from 'firebase/firestore';
import { db } from "../firebase";
 

// const baseURL =
//   "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";
function NoteList() { console.log("start notelist");
 
useEffect(() => {
  const interval = setInterval(() => {
    console.log('This will run every second!');
  }, 3500);
//  return () => clearInterval(interval);
}, [ ]);


  //משתנים בשימוש גלובלי
  const { noteListFromServer, setNoteListFromServer } =
    useContext(TweetContext);
    
   //משתנים בשימוש מקומי
    const tweetsCollectionFromDB = collection(db, `tweets`);

    const getAllNotes = async () => {
      try {


        //הגבלת טוויטים וסידור לפי תאריך
       const q =  query(tweetsCollectionFromDB,orderBy("date", "desc"), limit(4)); 
        const allNotesSnapShot = await getDocs(q);
    ///////////////////////////////////
       const allNotes = allNotesSnapShot.docs.map((tmpName) => {
       const newNoteWithId = { ...tmpName.data(), id: tmpName.id, };

       return newNoteWithId;
        });    

            setNoteListFromServer(  allNotes   );
  
      } catch (err) {
        console.log(err);
      }   
    };


    useEffect(() => {
      getAllNotes();
    }, []);



  return (
    <>
      {noteListFromServer.map((ttt) => (

 
        <div
          className="bg-color-grey-dark  note-in-pack    mt-3 p-3  pt-4  pb-2  rounded"
          key={uuid()}
                    >
        
          <div className="note-in-pack-title  d-flex  ">
            <p className="pe-2">{ttt.userName}</p>  
            {/* <p className="pe-2">{ttt.userID}</p>  */}
          </div>
          
          <p className="color-white">{ttt.content}</p>  
          <p className="note-date  "> Created at: {ttt.date} </p>  
          
        </div> 


     ))}


    </>
  );

}

console.log("end note map");
export default NoteList;

  // const fetchData = () => {
  //   axios.get(baseURL).then(({ data }) => setNoteListFromServer(data.tweets)); };
 
  // לקרוא מהשרת
  // useEffect(() => {
  //   onValue(ref(db), (snapshot) => {
  //     setNoteListFromServer([]);
  //     const data = snapshot.val();
  //     console.log(noteListFromServer);
  //     if (data !== null) {
  //       Object.values(data).map((zzz) => {
  //         setNoteListFromServer((oldArray) => [zzz, ...oldArray]);
  //       });
  //     }
  //   });
  // }, []);

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