import { useState, useEffect } from "react";
import React from "react";
import Form from "react-bootstrap/Form";
import { db } from "./firebase";
import { getDatabase, ref, set     } from "firebase/database";
// import { doc, updateDoc } from "firebase/firestore";
import { collection, addDoc, getDocs, onSnapshot, query, orderBy, limit,  doc, updateDoc, where, orderByKey ,equalTo } from 'firebase/firestore';


function Profile({  }) {

  const tweetsCollectionFromDB = collection(db, `tweets`);
  const [inputName, setInputName] = useState("");
 


  const handleClick = ({ inputName }) => {
localStorage.setItem("userName", inputName);
 console.log(localStorage.getItem("userName") )
 changUserNameIntweetList()
  changUserNameInUserList()
  
};


const changUserNameInUserList =  async () => {
  const changeTheUserCollection = doc(db, "users", localStorage.getItem("userID"));
  // const changeTheTweetCollection = doc(db, "tweets", localStorage.getItem("userID"));
  try { 
     await updateDoc(changeTheUserCollection, {
        nickname: inputName  });
    }   catch (err) {
    console.log(err);
  }
};


 const changUserNameIntweetList =  async () => {
  console.log("try");

  const changeThetweetCollection = doc(db, `tweets`).orderByKey(localStorage.getItem("userID"));
 
 console.log(changeThetweetCollection);
 try { 
     await   changeThetweetCollection.update ({
      userID: inputName  });
    }  
     catch (err) {
    console.log(err);
  }
};





// const changUserNameInTweet  =  async () => {
 //    const tweetsCollectionFromDB = collection(db, `tweets`);
//  const q =  query(tweetsCollectionFromDB,orderBy("userName" ) ); 

  // const changeTheTweetCollection = doc(db, "tweets", localStorage.getItem( userID ));
//   try { 
//      await updateDoc(changeTheTweetCollection, {
//         nickname: inputName  });
//     }   catch (err) {
//     console.log(err);
//   }
// };


// 

 




// 

// // Set the "capital" field of the city 'DC'
// await updateDoc(changUserNameInFirebase, {
//   nickname: inputName 
// });



// function writeUserData( inputName ) {
//   console.log("start change name in server" )
//   const db = getDatabase();
//   set(ref(db, 'users/' + localStorage.getItem("userID")), {
//     nickname: inputName 
//    });
// }


// import { doc, updateDoc } from "firebase/firestore";

// const washingtonRef = doc(db, "cities", "DC");

// // Set the "capital" field of the city 'DC'
// await updateDoc(washingtonRef, {
//   capital: true
// });




  // const  userInfoForServer  =  {
  //   mail: registerEmail,
  //   nickname: "nickname",
  //   profile_picture : "",
  //   date: currentDate.toLocaleString()
  // } ;

  // localStorage.setItem("userID", takeItForStore.id);
  // console.log(localStorage.getItem("userID") )
  // localStorage.setItem("userName", inputName);
  // console.log(localStorage.getItem("userName") )
  





  return (
    <div className="container mt-6  ">
      <h1 className="hedline-text color-white pb-3">Profile</h1>
      <p className="subline-text color-white">User Name</p>

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            className="inputName bg-transparent  rounded  p-3 border border-2"
            type="text"
            placeholder="User Name"
          />
        </Form.Group>
      </Form>

      <button
        onClick={() => handleClick({ inputName })}
        type="button"
        className="profilebtn btn mt-2  btn-primary btn-block" >
        Save
      </button>
    </div>
  );
}
export default Profile;
