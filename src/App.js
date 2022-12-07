import { useState, useEffect } from "react";
import uuid from "react-uuid";
import "./App.css";
import WriteNote from "./components/WriteNote";
import NoteList from "./components/NoteList";
import axios from "axios";


function App() {
  

  const [toggleErrorNote, setToggleErrorNote] = useState(true);
  const [errorText, setErrorText] = useState("");
  const [toggleSpinner, setToggleSpinner] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [textArea, setTextArea] = useState("");
  const [noteListFromServer, setNoteListFromServer] = useState([]);
  const [makefetch, setMakefetch] = useState([]);
  
  // const [newNoteAfterClick, setNewNoteAfterClick] = useState([]);
  
  
 
 
  console.log( "ddddddddddddddd" + toggleErrorNote);

  const baseURL = "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";

  function NoTextNote() {
    window.confirm("note’s text is mandatory");
  }

  useEffect(() => {
    limitTextArealength();
  });

  const limitTextArealength = function () {
    if (textArea.length > 140) {
      setButtonDisabled(true);
      setErrorText("The tweet can't contain more then 140 chars.");
      setToggleErrorNote(true);
    } else {
      setButtonDisabled(false);
      setToggleErrorNote(false);
    }
  };

  console.log( 22);

  const currentDate = new Date();

const addNoteClick = () => {
    if (textArea.trim() === "") {
      return NoTextNote();
    }
    else {
    }
  const newNoteAfterClick = {
    content: textArea   ,
    userName:   "tweet factory"  ,
    date: currentDate.toISOString(),
  // date:  11/11,
    id: uuid()
  };




  const handleSubmit = () => {
    console.log( "handleSubmit");
    setToggleSpinner(true);
axios.post(baseURL, newNoteAfterClick).then(({ data }) => setMakefetch(data))
.then(function (response) {
  setToggleSpinner(false);
})
.catch(function (error) {
  setToggleErrorNote(true);
  
  // handleErrorFromServer()
  console.log( 8);

  console.log( error.response.data.message);
  console.log( 9);
});
        setTextArea("");
};
 handleSubmit(newNoteAfterClick)

};
console.log( "before handleErrorFromServer");

// useEffect(() => {
//   handleSubmit();
// },[newNoteAfterClick]);




// function handleErrorFromServer() {
//   console.log( "inside handleErrorFromServer");
//   console.log( 1);
//   setToggleSpinner(false);
//   setErrorText("Error server");
//   console.log( 2);
//   setToggleErrorNote(true);
//   console.log( 3);
//   setTimeout(delayNote, 3000)
//   console.log( 4);
//  function delayNote() {
//   //  setToggleErrorNote(false);
//   }
//   console.log( 5);

// }



console.log( "after handleErrorFromServer");






console.log( "sssssss" + toggleErrorNote);


  return (
    <div className="App  ">
      <div className="container  ">

     
        
        <WriteNote
          className="  "
          errorText={errorText}
          toggleErrorNote={toggleErrorNote}
          // setToggleErrorNote={setToggleErrorNote}
          setToggleSpinner={setToggleSpinner}
          toggleSpinner={toggleSpinner}
          addNoteClick={addNoteClick}
          textArea={textArea}
          setTextArea={setTextArea}
          buttonDisabled={buttonDisabled}
        />
  
        <NoteList
        makefetch={makefetch}
         setMakefetch={setMakefetch}
          noteListFromServer={noteListFromServer}
           setNoteListFromServer={setNoteListFromServer}
          setTextArea={setTextArea}
          textArea={textArea}
        />
      </div>
    </div>
  );
}
export default App;
