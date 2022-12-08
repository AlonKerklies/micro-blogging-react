import { useState, useEffect } from "react";
import uuid from "react-uuid";
import WriteNote from "./components/WriteNote";
import NoteList from "./components/NoteList";
import axios from "axios";

function Home({}) {
  console.log("start app page");

  const [toggleErrorNote, setToggleErrorNote] = useState(true);
  const [errorText, setErrorText] = useState("");
  const [toggleSpinner, setToggleSpinner] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [textArea, setTextArea] = useState("");
  const [noteListFromServer, setNoteListFromServer] = useState([]);
  const [newNoteAfterClick, setNewNoteAfterClick] = useState([]);
  const [prevTweets, setPrevTweets] = useState([]);

  const baseURL =
    "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";

  function NoTextNote() {
    window.confirm("note’s text is mandatory");
  }

  const currentDate = new Date();

  const addNoteClick = () => {
    if (textArea.trim() === "") {
      return NoTextNote();
    } else {
    }

    setNewNoteAfterClick({
      content: textArea,
      userName: localStorage.getItem("userName"),
      date: currentDate.toISOString(),

      id: uuid(),
    });
  };

  useEffect(() => {
    handleSubmit();
  }, [newNoteAfterClick]);

  const handleSubmit = () => {
    const isEmpty = Object.keys(newNoteAfterClick).length === 0;
    if (isEmpty === true) {
      return;
    } else {
      {
        console.log("a new tweet");
      }
    }

    setToggleSpinner(true);


    axios
      .post(baseURL, newNoteAfterClick)
                                
      // .then(({ data }) => setMakefetch(data)) // עדכון של השרת
      .then(function (response) {
setPrevTweets([newNoteAfterClick, ...prevTweets]); //
        setToggleSpinner(false);
        setTextArea("");
      })
      .catch(function (error) {
        setToggleSpinner(false);

        console.log(error.response.data.message);
      });

    console.log("end app page");
  };

  return (
    <div className="App">
      <div className="container">
        <WriteNote
          className="  "
          errorText={errorText}
          toggleErrorNote={toggleErrorNote}
          setToggleSpinner={setToggleSpinner}
          toggleSpinner={toggleSpinner}
          addNoteClick={addNoteClick}
          textArea={textArea}
          setTextArea={setTextArea}
          buttonDisabled={buttonDisabled}
          setToggleErrorNote={setToggleErrorNote}
          setErrorText={setErrorText}
          setButtonDisabled={setButtonDisabled}
        />

        <NoteList
          // makefetch={makefetch}
          // setMakefetch={setMakefetch}
          noteListFromServer={noteListFromServer}
        setNoteListFromServer={setNoteListFromServer}
          setTextArea={setTextArea}
          textArea={textArea}
        />
      </div>
    </div>
  );
}

export default Home;
