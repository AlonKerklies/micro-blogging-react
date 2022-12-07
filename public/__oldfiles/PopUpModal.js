import React, { useState } from "react";

function PopUpModal({
  noteTitle,
  notemainMassage,
  noteNoteDate,
  noteupdate,
  ChangeNoteClick,
  setTextArea,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleUpdate = function (noteid, textArea, inputText) {
  //   ChangeNoteClick(noteid, textArea, inputText);
  //   setTextArea("");
  //   // setinputText("");
  //   handleClose();
  //   return;
  // };

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
          <p className="  pe-2">{noteTitle}</p> </div>  
  

        <p className="color-white">{notemainMassage}</p> {/* תוכן הודעה */}
        <span className="note-date   m-0 p-0">{noteupdate}</span>
        <p className="note-date  "> Created at: {noteNoteDate} </p>{" "}
      </div>

    </>
  );
}

export default PopUpModal;
// render(<Example />);
