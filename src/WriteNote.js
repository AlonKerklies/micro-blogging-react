




function WriteNote({  
  notemainMassage,
  addNoteClick, 
  setTextArea ,
  textArea ,
  buttonDisabled,
  limitTextArealength,
  disabled 
  //  setinputText,
  //  inputText 
  
    }) {



 
     


  return (
    // <div className="theform  border border-2 border-dark rounded p-3 mb-2  ">
   
      <div className="noteEdit needs-validation       ">
        {/* <input
          type="text"
          value={inputText}
          onChange={(e) => setinputText(e.target.value)
          }
          className="form-control mb-2 border  border-3 border-dark"
          id="title"
          placeholder="Note title"
          aria-label="Username"
          aria-describedby="addon-wrapping" required
        ></input> */}

        <textarea value={textArea}  
          onChange={(e) => setTextArea(e.target.value)}
          className="form-control rounded   border border-2  bg-transparent"
          id="textbody" placeholder="Write your note.." >
          </textarea>
   
      <button
          disabled={buttonDisabled} 

          onClick={addNoteClick}
          type="button"
          className="btn btn-tweet btn-primary btn-block">
          Tweet
        </button>
      
      </div>
    // </div>
  );
  
}
export default WriteNote;
