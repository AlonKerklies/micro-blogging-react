import { useEffect, useState } from "react";
import React from "react";
import Form from "react-bootstrap/Form";
import { db ,app } from "./firebase";
import { storage } from "./firebase";
import { ref , uploadBytes , listAll, getDownloadURL ,  orderBy, limit ,} from 'firebase/storage'
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
 
import {collection, query,doc,updateDoc, where,   addDoc, getDocs,getDoc, onSnapshot, setDoc} from "firebase/firestore";

function Profile({}) {
  const tweetsCollectionFromDB = collection(db, `tweets`);
  const [inputName, setInputName] = useState("");

  const navigae = useNavigate("");








 
 

  const handleChangeName = ({ inputName }) => {
    localStorage.setItem("userName", inputName);
    console.log(localStorage.getItem("userName"));
    changUserNameIntweetList();
    changUserNameInUserList();
  };




  const changUserNameInUserList = async () => {
    const changeTheUserCollection = doc(
      db,
      "users",
      localStorage.getItem("userID")     
    );

    try {
      await updateDoc(changeTheUserCollection, {
        nickname: inputName,
      });
      navigae("/");
    } catch (err) {
      console.log(err);
    }
  };

  const changUserNameIntweetList = async () => {
    console.log("try");

    const q = query(
      collection(db, "tweets"),
      where("userID", "==", localStorage.getItem("userID"))
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      // updateDoc({ userName: inputName } )
    });

    try {
      //  await   q.update ({
      //   userID: inputName  });
    } catch (err) {
      console.log(err);
    }
  };

///////////////////////////////////////

const[profileImageUrl, setProfileImageUrl] = useState (null);
const imageFolderRef = ref(storage, `usersPic/${localStorage.getItem("userID")}/`)
const [imageUpload, setImageUpload] = useState(null);
const [userAndImageUrl, setUserAndImageUrl] = useState([]);

 
useEffect(()=>{
  setProfileImageUrl(localStorage.getItem("imageUrl"))
  if (!profileImageUrl ) {console.log('no profile image');
  setProfileImageUrl('https://firebasestorage.googleapis.com/v0/b/alon-kerklies-tweet.appspot.com/o/nouser.webp?alt=media&token=1e33cc58-cd1f-40b9-b127-811398a0976f')
}



  } 
 ,[])


const handleUploadPicture = async () =>{
if (imageUpload == null) return;
const imageRef = ref(storage, `usersPic/${localStorage.getItem("userID")}/${imageUpload.name}`)

await uploadBytes(imageRef,imageUpload);
// .then((response) => {
//   getDownloadURL(response.metadata); })
const imageUrl = await  getDownloadURL(imageRef );
setProfileImageUrl(imageUrl)
 localStorage.setItem("imageUrl", imageUrl);


 setUserAndImageUrl({
userId: localStorage.getItem("userID"),
imageUrl: imageUrl,
 })

 console.log('userAndImageUrl',userAndImageUrl);

//  await setDoc(doc(db, "data", "one"), docData);
//  updateDoc, where,  
// const washingtonRef = doc(db, "cities", "DC");

// // Set the "capital" field of the city 'DC'
// await updateDoc(washingtonRef, {
//   capital: true
// });

// import { doc, setDoc } from "firebase/firestore"; 

 
const tmpImageUrl ='https://firebasestorage.googleapis.com/v0/b/alon-kerklies-tweet.appspot.com/o/nouser.webp?alt=media&token=1e33cc58-cd1f-40b9-b127-811398a0976f';
// גם מייצר חדש וגם מעדכן
await setDoc(doc(db, "usersPulicInfo",  localStorage.getItem("userID") ), {
  userName: "",
  userId: localStorage.getItem("userID"),
  imageUrl: tmpImageUrl,
});

// מקבל מידע
const docRef = doc(db, "usersPulicInfo",localStorage.getItem("userID"));
const docSnap = await getDoc(docRef)
if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}

const updateRef = doc(db, "usersPulicInfo",localStorage.getItem("userID"));

// Set the "capital" field of the city 'DC'
await updateDoc(updateRef, {
  imageUrl: imageUrl,
});




// const updateDocImageUrl = async () => {
//   try {
//     const ImageUrlToDb = await updateDoc(collection(db, `usersPulicInfo`), userAndImageUrl);  
//      console.log('ImageUrlToDb',ImageUrlToDb);
//   } catch (err) {
//     console.log(err);
//   }
// };
// updateDocImageUrl();



// const addDocImageUrl = async () => {
//   try {
//     const ImageUrlToDb = await addDoc(collection(db, `usersPulicInfo`), userAndImageUrl);  
//      console.log('ImageUrlToDb',ImageUrlToDb);
//   } catch (err) {
//     console.log(err);
//   }
// };
// addDocImageUrl();



}
 


// return (
//   <div className="container">
//     <WriteNote addNoteClick={addNoteClick} />
//     <NoteList />
//   </div>
// );
// }



// useEffect(()=>{
//   listAll(imageFolderRef).then((response)=>{
//    console.log(response.items ); 
 
 
//    getDownloadURL(response.items[0]).then((url) => {setProfileImageUrl(url) })
//   console.log(profileImageUrl);
//   })
//  },[])
  return (
    <div className="container mt-6  ">


     {/* <input type='file' onChange={handleImageChange} /> */}
     <input type="file" onChange={(event) => {setImageUpload(event.target.files[0])}} />

     <button onClick={handleUploadPicture}>upload picture</button>


      <h1 className="hedline-text color-white pb-3">Profile</h1>

      <div className="profileImage">
    <img src= {profileImageUrl} alt="profileImageUrl" />
    </div>

      <p className="subline-text color-white">Choose Username</p>

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
        onClick={() => handleChangeName({ inputName })}
        type="button"
        className="profilebtn btn mt-2  btn-primary btn-block"
      >
        Save
      </button>

 
  


    
  
 
 




    </div>




  );
}
export default Profile;







{/* <div>
<input type="file" onChange={(event) => {setImageUpload(event.target.files[0])}} />
<button onClick={handleUploadPicture}>upload file</button>
</div> */}



  // const [profileImageUrl, setProfileImageUrl] = useState("");
  // const [imageList, setImageList] = [];


  //   response.items.forEach((item)=> {getDownloadURL(item).
//   then((url)=>{ setProfileImageUrl(url)})});});
//  console.log(profileImageUrl);

// useEffect(()=>{
//  listAll(imageFolderRef).then
//  ((response)=>{response.items.forEach((item)=> {getDownloadURL(item).
//   then((url)=>{ setProfileImageUrl(url)})});});
//  console.log(profileImageUrl);
 
// },[])






// const handleUploadPicture =() =>{

// if (imageUpload == null) return;

// const imageRef = ref(storage, `usersPic/${localStorage.getItem("userID")}/${imageUpload.name+uuid()}`)
// uploadBytes(imageRef,imageUpload)
// .then((response) => {
//   getDownloadURL(response.metadata); })
 


// .then((response) => {setProfileImageUrl(storage+response.metadata
// .fullPath); })
// .then((response) => {getDownloadURL(response); 

// }

// );

 
 

 
  // console.log(imageFolderRef);
// }