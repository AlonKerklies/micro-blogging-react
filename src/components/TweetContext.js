import { createContext, useContext, useState } from "react";
export const TweetContext = createContext();




export default function TweetContextProvider({ children }) {


    
    // const [tweets, setTweets] = useState([]);
  
    // function addTweet(tweet) {
    //   setTweets((prevTweets) => [tweet, ...prevTweets]);
    // }
  
    // function removeTweet(tweetId) {
    //   const itemsToShow = tweets.filter((t) => t.id !== tweetId);
    //   setTweets(itemsToShow);
    // }
  
    return (
      <TweetContext.Provider value={{ tweets, addTweet, removeTweet }}>
        {children}
      </TweetContext.Provider>
    );
  }
  