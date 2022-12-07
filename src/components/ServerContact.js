import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
 

  const baseURL = "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";

function ServerContact({ notes, deleteNote , setinputText ,inputText,  ChangeNoteClick , setTextArea ,textArea ,myNote }) {

 console.log( myNote );

  
  const [post, setPost] = React.useState(null);
  const [submittedData, setSubmittedData] = useState();
  const [getFromUrl, setGetFromUrl] = React.useState(null);

  if (!post) return null;

  const baseURL = "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";

  const handleSubmit = (myNote) => {
    // axios.post(baseUrl, formData).then(getAllProducts);
    axios.post(baseURL, myNote).then(({ data }) => setSubmittedData(data));
  };



  return (
    <div className="  ">
        {/* <p>{getFromUrl.tweets}ddd Server Contact start</p>  */}
        <p> {getFromUrl.tweets[0].content}</p> 
       
        <p>   Server Contact start</p> 
    
    </div>
  );   
}
export default ServerContact;

// "content": "123",
// "userName": "Tom",
// "date": "2022-12-06T17:29:47.120Z",
// "id": "Go608tOvTHC0bMa0RfeG"


















// import axios from "axios";
// import React from "react";
 

// const baseURL = "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet?1";

// function ServerContact({ notes, deleteNote , setinputText ,inputText,  ChangeNoteClick , setTextArea ,textArea }) {
//   console.log("Server Contact start");
 
//   const [post, setPost] = React.useState(null);
//   const [getFromUrl, setGetFromUrl] = React.useState(null);
//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setGetFromUrl(response.data);
//       console.log(response.data   );
//       console.log(response.data.tweets[2].content  );
//       // console.log(post.title);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <div className="  ">
//         {/* <p>{getFromUrl.tweets}ddd Server Contact start</p>  */}
//         <p>   Server Contact start</p> 
    
//     </div>
//   );   
// }
// export default ServerContact;










// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

// function ServerContact({ notes, deleteNote , setinputText ,inputText,  ChangeNoteClick , setTextArea ,textArea }) {
//   console.log("Server Contact start");
 
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//       console.log(response);
//       console.log(post.title);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <div className="  "> <p>Server Contact start</p>
      
//       {/* <h1>{post.title}</h1>
//       <p>{post.body}</p> */}

//     </div>
//   );   
// }
// export default ServerContact;
