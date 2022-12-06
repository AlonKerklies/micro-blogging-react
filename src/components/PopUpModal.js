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

  const handleOpenExistNote = function () {
    // setinputText(noteTitle);
    setTextArea(notemainMassage);
    handleShow();
    return;
  };

  return (
    <>
      {/* -------- הפתק הקטן-------------- */}

      <div
        className="note-in-pack    mt-3 p-3  pt-4  pb-4   "
        onClick={handleOpenExistNote}
      >
        <div className="note-in-pack-title  d-flex  ">
          {/* ------ hover  ---- */}
          {/* <div  className="icon-edit"   >
        <svg className="  me-1 pe-1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
</svg></div>     */}
          {/* ------end of  hover  ---- */}
          <p className="  pe-2">{noteTitle}</p> {/* כותרת */}
          {/* <span className="trashIcon ms-auto" onClick={() => deleteNote(noteid)}>
          </span> */}
        </div>
        <p className="color-white">{notemainMassage}</p> {/* תוכן הודעה */}
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
