import React, { useState, useEffect, useContext } from "react"; 
import { TweetContext } from "./TweetContext";

// const [toggleSpinner ] = useContext(TweetContext);

// const  Spinner = ( {toggleSpinner})  => {

//   return (
//     <div>
// {toggleSpinner && (
//  <div className= "spinner-css spinner-border text-light" role="status">
// </div>  
// )}
//  </div>);
 
// }     
     
// export default Spinner;








 
function Spinner() 
 
 {  

  const { toggleSpinner }  = useContext(TweetContext);
 

  return (
    <div> 
{toggleSpinner && (
 <div className= "spinner-css spinner-border text-light" role="status">
</div>  
)}
 </div>);
}
 
export default Spinner;
