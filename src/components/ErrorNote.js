import React ,{useState} from 'react';

const  ErrorNote = ( {toggle,setToggle})  => {

  return (
    <div>
      {/* <button onClick={()=>setToggle(!toggle)}>toggle</button> */}

{toggle && (
  <p className="too-long rounded  ps-3 pe-3 pt-1 pb-1">The tweet can't contain more then 140 chars.</p>
)}
 </div>); }     
     

export default ErrorNote;
