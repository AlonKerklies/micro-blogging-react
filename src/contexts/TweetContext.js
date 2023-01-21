import { createContext, useState } from "react";
export const TweetContext = createContext(); // שם המעטפת של הכל
export default function TweetContextProvider({ children }) {
  const [noteListFromServer, setNoteListFromServer] = useState([]);
  const [textArea, setTextArea] = useState("");
  const [toggleSpinner, setToggleSpinner] = useState(false);

  return (
    <TweetContext.Provider
      value={{
        noteListFromServer,
        setNoteListFromServer,
        textArea,
        setTextArea,
        toggleSpinner,
        setToggleSpinner,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
}
