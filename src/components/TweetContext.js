import { createContext, useContext, useState } from "react";

export const TweetContext = createContext(); // שם המעטפת של הכל

export default function TweetContextProvider({ children }) {
  const [noteListFromServer, setNoteListFromServer] = useState([]);

  
  // const [tweets, setTweets] = useState([]);

  // function addTweet(tweet) {
  //   setTweets((prevTweets) => [tweet, ...prevTweets]);
  // }

  // function removeTweet(tweetId) {
  //   const itemsToShow = tweets.filter((t) => t.id !== tweetId);
  //   setTweets(itemsToShow);
  // }

  return (
    <TweetContext.Provider
      value={{ noteListFromServer, setNoteListFromServer }}
    >
      {children}
    </TweetContext.Provider>
  );
}
// tweets, addTweet, removeTweet
