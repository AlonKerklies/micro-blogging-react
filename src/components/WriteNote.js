import ErrorNote from "./ErrorNote";
import Spinner from "./spinner";

function WriteNote({
  errorText,
  toggleErrorNote,
  addNoteClick,
  setTextArea,
  textArea,
  buttonDisabled,
  toggleSpinner,

}) {
  return (
    // <div className="theform  border border-2 border-dark rounded p-3 mb-2  ">

    <div className="noteEdit needs-validation       ">
 
      <Spinner  toggleSpinner={toggleSpinner}/>
      <ErrorNote toggleErrorNote={toggleErrorNote} errorText={errorText}  />
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
