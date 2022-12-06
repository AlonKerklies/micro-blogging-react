import axios from "axios";
import PopUpModal from "./PopUpModal";
import React from "react";

const baseURL = "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";

function NoteList({ setNotes ,notes, deleteNote , setinputText ,inputText,  ChangeNoteClick , setTextArea ,textArea }) {
  console.log("start note map");
 

  const [post, setPost] = React.useState(null);
  const [getFromUrl, setGetFromUrl] = React.useState(null);
  const [tweet00, setTweet00] = React.useState(null);
  const [NoteFromServer, setNoteFromServer] = React.useState([]);
  const [noteListFromServer, setNoteListFromServer] = React.useState([]);




  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setGetFromUrl(response.data);
      console.log(response.data   );
      console.log(response.data.tweets.length   );
        console.log(response.data.tweets[0].content  );
    


        // for (let i = 0; i < response.data.tweets.length ; i++) {  
         for (let i = 0; i < 5 ; i++) {    
          
            //  console.log(response.data.tweets[i].content  );
            //  console.log(response.data.tweets[i].userName  );
            //  console.log(response.data.tweets[i].date  );
          
             const newNoteFromServer = {
              title:       response.data.tweets[i].userName  ,
              mainMassage: response.data.tweets[i].content ,
              noteDate:    response.data.tweets[i].date ,
                };
                     
              noteListFromServer.push(newNoteFromServer);
            }
  
            setNotes(noteListFromServer); 
            setNoteListFromServer(  noteListFromServer );
            console.log(response.data.tweets[0]   );


      // console.log(post.title);
    });
  }, []);

  if (!getFromUrl) return null;

  return (
    <div className="NoteList  ">
       <p> {tweet00}</p>

      <div className="note-pack ">
        {noteListFromServer.map((note) => (
          
          <div className="bg-color-grey-dark   rounded">
               <PopUpModal  className="PopUpModal"
              //  notemainMassage={note.mainMassage}
               notemainMassage={note.mainMassage}
               noteTitle={note.title}
                noteNoteDate={note.noteDate}
                noteupdate={note.update}
                deleteNote={deleteNote  }
                noteid={note.id}  
                setTextArea={setTextArea}
                // textArea={textArea}
                textArea={tweet00}
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
