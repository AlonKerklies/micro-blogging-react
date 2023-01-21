import React, { useContext } from "react";
import { TweetContext } from "../contexts/TweetContext";

function Spinner() {
  const { toggleSpinner } = useContext(TweetContext);

  return (
    <div>
      {toggleSpinner && (
        <div
          className="spinner-css spinner-border text-light"
          role="status"
        ></div>
      )}
    </div>
  );
}

export default Spinner;
