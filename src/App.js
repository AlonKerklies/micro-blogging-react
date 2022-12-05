import { useState, useEffect } from "react";
import uuid from "react-uuid";
import "./App.css";
import WriteNote from "./WriteNote";
import NoteList from "./NoteList";

function App() {
  const [textArea, setTextArea] = useState("");
  const [inputText, setinputText] = useState("");
  // const [notes, setNotes] = useState([]);

//  הפתקים עוברים לשמירה מקומית
const [notes , setNotes ] = useState(() => {
const notesSaved = localStorage.getItem("notes");
return notesSaved ? JSON.parse(notesSaved) : [];
}); 

useEffect (() => { 
localStorage.setItem('notes', JSON.stringify(notes));
},[notes]);


// const [notes , setNotes ] = useState(() => {
//   const notesSaved = localStorage.getItem("noteLocal");
//   const initialValue = JSON.parse(notesSaved);
//   return initialValue || "";
//   }); 
  
//   useEffect (() => { 
//   localStorage.setItem('noteLocal', JSON.stringify(notes));
//   },[notes])
  

  function NoTextNote() {
    window.confirm("note’s text is mandatory");
  }

 // functidisabled = "disabled"on ConfirmDelete() {
  //   window.confirm("“Are you sure you want to delete your note?");
  // }

let buttonDisabled = false;
   const limitTextArealength = function(  ) {
   if (textArea.length >  10 ){
  console.log("too much" ) 
    buttonDisabled = true;
    } }
    limitTextArealength()
    
  const currentDate = new Date();

  const addNoteClick = () => {
    if (textArea.trim() === "") {
      return NoTextNote();   
    } 
    // else if  (textArea.length > 11   )
    //  { console.log("ffggffgg" );} 
    else {
    }

    const newNoteAfterClick = {
      id: uuid(),
      title: inputText === "" ? "yonatan" : inputText,
      mainMassage: textArea,
      noteDate:
        currentDate.toLocaleString("en-US", {
          month: "short",
          day: "numeric",
        }) +
        "Th " +
        currentDate.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }), 
        update: "", 
        
    };
    console.log(newNoteAfterClick);

    setTextArea("");
    setinputText("");
    setNotes([newNoteAfterClick, ...notes]); // מכניס את החדש לתוך רשימת הישנים
    // addToLoacal( );

  };


// const ChangeNoteClick = (theNoteWithThisID,mainMassage,title) => {  
// let objIndex; 
//  setinputText((prevShow) => !prevShow)
// objIndex = notes.findIndex((obj => obj.id == theNoteWithThisID));
// notes[objIndex].mainMassage = mainMassage
// notes[objIndex].title = title   


//  notes[objIndex].update = "Update: " +currentDate.toLocaleString("en-US", {
//    month: "short", day: "numeric",}) + "Th " +
//   currentDate.toLocaleString("en-US", {
//   hour: "numeric", minute: "numeric",  hour12: true, })
//   console.log("After update: ", notes[objIndex])
// }

   // מוחק כפתור
  // const deleteNote = (theNoteWithThisID) => {
  //   ConfirmDelete();  
  //   setNotes(notes.filter((note) => note.id !== theNoteWithThisID));
  // };

  return (
    <div className="App  ">
      <div className="container  ">
        <WriteNote  className="  "
          addNoteClick={addNoteClick}
          textArea={textArea}
          setTextArea={setTextArea}
          buttonDisabled={buttonDisabled}
          // limitTextArealength={limitTextArealength}
          // buttonDisabled={buttonDisabled}
          // inputText={inputText}
          // setinputText={setinputText}
        />

        <NoteList notes={notes} 
        // deleteNote={deleteNote} 
        // setinputText={setinputText} 
        // inputText={inputText}
        setTextArea={setTextArea}
        textArea={textArea}
          // ChangeNoteClick={ChangeNoteClick}
          />
      </div>
    </div>
  );
}
export default App;

