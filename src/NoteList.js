import PopUpModal from "./PopUpModal";

function NoteList({ notes, deleteNote , setinputText ,inputText,  ChangeNoteClick , setTextArea ,textArea }) {
 
 
  return (
    <div className="NoteList  m-2 ">
      <div className="note-pack ">
        {notes.map((note) => (
          <div className="">
               <PopUpModal  className="PopUpModal"
               notemainMassage={note.mainMassage}
               noteTitle={note.title}
                noteNoteDate={note.noteDate}
                noteupdate={note.update}
                deleteNote={deleteNote  }
                noteid={note.id}  
                setTextArea={setTextArea}
                textArea={textArea}
                inputText={inputText}
                setinputText={setinputText}
                ChangeNoteClick={ChangeNoteClick}
                /> 
          </div>     
        ))}
      </div>
    </div>
  );  
}
export default NoteList;
