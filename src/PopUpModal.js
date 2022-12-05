import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function PopUpModal({
  noteTitle,
  notemainMassage,
  noteNoteDate,
  noteupdate,
  deleteNote,
  noteid,
  // setinputText,
  // inputText,
  ChangeNoteClick,
  setTextArea,
  textArea,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdate = function (noteid, textArea, inputText) {
    ChangeNoteClick(noteid, textArea, inputText);
    setTextArea("");
    // setinputText("");
    handleClose();
    return;
  };

  const handleOpenExistNote  = function () {
    // setinputText(noteTitle);
    setTextArea(notemainMassage);                    
    handleShow()
    return;
  };





  
  return (
    <>
      {/* -------- הפתק הקטן-------------- */}
      
      <div     
        className="note-in-pack  mt-2 p-3 pb-0  rounded  border border-5 "
        onClick={handleOpenExistNote}        
      >  
        <div className="note-in-pack-title  d-flex  ">

          {/* ------ hover  ---- */}
        {/* <div  className="icon-edit"   >
        <svg className="  me-1 pe-1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
</svg></div>     */}
{/* ------end of  hover  ---- */}












          <p className="fw-bold pe-2">{noteTitle}</p>
          {/* <span className="trashIcon ms-auto" onClick={() => deleteNote(noteid)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
          </span> */}
        </div>
        
        <p>{notemainMassage}</p> {/* תוכן הודעה */}
        <span className="note-date   m-0 p-0">{noteupdate}</span>
        <p className="note-date  "> Created at: {noteNoteDate} </p>{" "}
      </div>

      {/* <Modal
        className={"modal-sm"}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      > */}
        {/* --------הפתק הגדול-------------- */}

        {/* <Modal.Body className="modalGeneral    p-3 rounded border border-5 border-dark">
          <div className="fw-bold note-in-pack-title  d-flex justify-content-between">
            <span className="fw-bold amazing-yellow ps-2 pe-2" >Update Mode</span>  */}
            {/* <Button onClick={handleClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="28"
                fill="black"
                viewBox="0 0 14 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </Button> */}
          {/* </div> */}

            {/* <input  
              type="text"
              value={inputText}
              onChange={(e) => setinputText(e.target.value)}
              className="form-control fw-bold note-in-pack-title mt-2 mb-2 border  border-3 border-dark"
              id="title"
              placeholder="Note title"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              required
            ></input> */}
                                
          {/* <textarea
            value={textArea}
            onChange={(e) => setTextArea(e.target.value)}
            className="form-control mb-5 border border-3 border-dark"
            id="textbody"
            placeholder="Write your note.."
          ></textarea> */}

          {/* <p className="note-date">{noteNoteDate}</p> */}

          {/* <button
            onClick={() => handleUpdate(noteid, textArea, inputText)}
            type="button"
            className="btn btn-dark  btn-block w-100">
            Change&Close </button> */}
        {/* </Modal.Body>
      </Modal> */}
    </>
  );
}

export default PopUpModal;
// render(<Example />);
