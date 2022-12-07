import React ,{useState} from 'react';

const  Spinner = ( {toggleSpinner})  => {

  return (
    <div>
      {/* <button onClick={()=>setToggle(!toggle)}>toggle</button> */}

{toggleSpinner && (
 
 
 

 <div className= "spinner-css spinner-border text-light" role="status">
 {/* <span class="sr-only">Loading...</span> */}
</div> 

  
 


  
)}
 </div>); }     
     

export default Spinner;
