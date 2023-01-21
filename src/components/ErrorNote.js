import React ,{useState} from 'react';

const  ErrorNote = ( {toggleErrorNote, errorText})  => {

  return (
    <div>
      {/* <button onClick={()=>setToggle(!toggle)}>toggle</button> */}

{toggleErrorNote && (
  <p className="too-long rounded  ps-3 pe-3 pt-1 pb-1">{errorText}</p>
)}
 </div>); }     
     

export default ErrorNote;
