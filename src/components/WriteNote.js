
import React, { useState, useEffect, useContext } from "react"; 
import ErrorNote from "./ErrorNote";
import Spinner from "./spinner";


function WriteNote({
  setButtonDisabled,
  setErrorText,
  setToggleErrorNote,

  errorText,
  toggleErrorNote,
  addNoteClick,
  setTextArea,
  textArea,
  buttonDisabled,
  toggleSpinner,
}) {

  
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
      <Spinner toggleSpinner={toggleSpinner} />
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
    // </div>
  );
}
export default WriteNote;
