
import React, { useState, useEffect, useContext } from "react"; 
import { TweetContext } from "./TweetContext";
import ErrorNote from "./ErrorNote";
import Spinner from "./spinner";

function WriteNote({
  addNoteClick,

}) {

  //משתנים בשימוש גלובלי
  const { textArea, setTextArea } = useContext(TweetContext);

  //משתנים בשימוש מקומי
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [toggleErrorNote, setToggleErrorNote] = useState(true);

  console.log("start WriteNote ");

  useEffect(() => {
    limitTextArealength();
  }, [textArea]);

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

  return (
    <div className="noteEdit needs-validation       ">
      <Spinner   />
      <ErrorNote toggleErrorNote={toggleErrorNote} errorText={errorText} />
      <textarea
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
        className="form-control rounded   border border-2  bg-transparent"
        id="textbody"
        placeholder="Write your note.."
      ></textarea>

      <button
        disabled={buttonDisabled}
        onClick={addNoteClick}
        type="button"
        className="btn btn-tweet btn-primary btn-block"
      >
        Tweet
      </button>
    </div>
  
  );
}
export default WriteNote;
