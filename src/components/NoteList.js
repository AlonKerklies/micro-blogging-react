import React, { useState, useEffect, useContext } from "react";
import { TweetContext } from "../contexts/TweetContext";
import uuid from "react-uuid";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";

// const baseURL =
//   "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";
function NoteList() {
  //משתנים בשימוש גלובלי
  const { noteListFromServer, setNoteListFromServer } =
    useContext(TweetContext);

  //משתנים בשימוש מקומי
  const tweetsCollectionFromDB = collection(db, `tweets`);

  const getAllNotes = async () => {
    try {
      //הגבלת טוויטים וסידור לפי תאריך
      const q = query(
        tweetsCollectionFromDB,
        orderBy("date", "desc"),
        limit(4)
      );
      const allNotesSnapShot = await getDocs(q);
      ///////////////////////////////////
      const allNotes = allNotesSnapShot.docs.map((tmpName) => {
        const newNoteWithId = { ...tmpName.data(), id: tmpName.id };

        return newNoteWithId;
      });

      setNoteListFromServer(allNotes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getAllNotes();
    }, 3000);
    //  return () => clearInterval(interval);
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
