import React, { useEffect,useState } from 'react';
import "./Login.css";
import  db  from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,query,where, arrayUnion, arrayRemov,setDoc
} from "firebase/firestore";
import ReactDOM from "react-dom";
import * as Components from "./components.js";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import {  sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../firebase-config';
import { NavLink, useNavigate } from 'react-router-dom'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from "react-router-dom";

const Login = () => {
  const [signIn, toggle] = React.useState(true);
  const [error, setError] = useState(null);
  const [showElement, setShowElement] = useState(false);
  const handleRadioChange = () => {
    setShowElement(!showElement);
  };
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    forgetemail: "",
    type:"",
    patientemail:"",
  })
  const usersCollectionRef = collection(db, "users");

  const createUser = async (newName,NewEmail,Newrole="patient",patientemail="") => {
    if(patientemail){
      const q = query(collection(db, 'users'), where('email', '==', `${patientemail}`));
      // Execute the query and get the matching documents
      getDocs(q)
        .then((querySnapshot) => {
          querySnapshot.forEach((docSnapshot) => {
            console.log("checkid",docSnapshot.id);
            const documentRef = doc(db, 'users', docSnapshot.id);
      
            // Create a JavaScript object representing the data you want to update
            const data = {
              members: arrayUnion(NewEmail),
              // ... other fields and their updated values
            };
      
            // Update the document with the new values using the setDoc() function
            updateDoc(documentRef, data,{ merge: true })
              .then(() => {
                console.log('Document updated successfully:', docSnapshot.id);
              })
              .catch((error) => {
                console.error('Error updating document:', docSnapshot.id, error);
              });
          });
        })
        .catch((error) => {
          console.error('Error retrieving documents:', error);
          setError(error.message);
         
        });

    }else{
      await addDoc(usersCollectionRef, { name: newName, email: NewEmail ,role: Newrole});
    }
    
  };

  let name,value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const onLogin = async (e) => {
      e.preventDefault();
      await signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
          console.log(user);
          if(user){
            console.log("User loggeed in Successfully");
            alert("User loggeed in Successfully")
            navigate("/PatientDashboard")
          }else{
            navigate("/login")
            setError("Can't login try again");
          }
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
          alert("Something Went wrong try again");
          setError(error.message);
      });
  }

  const onSignUp = async (e) => {
    e.preventDefault()
    console.log("this is user tyoe",user.type);
    await createUser(user.name,user.email,user.type,user.patientemail);
    await createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          alert("sign up successfull")
          window.location.reload()
          
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setError(error.message);
          alert("Something went wrong");
          // ..
      });
  }

  const onForgetPassword = async (e) => {
    await sendPasswordResetEmail(auth, user.forgetemail);
    console.log("Password reset email sent")
    alert('please check your mail');
  }
    // const [NewName, setNewName] = useState("")
    // const [NewEmail, setNewEmail] = useState("")
    // const [NewPassword, setNewPassword] = useState("")


  return (
    <>
    <div className='maindiv'>
    {error && <Components.Error>Error: {error}</Components.Error>}
     <Components.Container>
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          
          <Components.Input name="name" type="text" placeholder="Name" value={user.name} onChange={getUserData}/>
          <Components.Input name="email" type="email" placeholder="Email" value={user.email} onChange={getUserData} />
          <Components.Input name="password" type="password" placeholder="Password" value={user.password} onChange={getUserData} />
          <div onChange={getUserData}>
              <input type="radio" value="patient" name="type" /> Patient
              <input type="radio" value="doctor" name="type" /> Doctor
              <input type="radio" value="member" name="type" onChange={handleRadioChange}/> Member
              {
                showElement && 
                <div>
                  <Components.Input name="patientemail" type="email" placeholder="Patient Email" value={user.patientemail} onChange={getUserData}/>
                </div>
              }
          </div>
          
          <Components.Button onClick={onSignUp}>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Sign in</Components.Title>
          
          <Components.Input name="email" type="email" placeholder="Email" value={user.email}  onChange={getUserData} />
          <Components.Input name="password" type="password" placeholder="Password" value={user.password}  onChange={getUserData} />
          <Components.Anchor >
            <Popup trigger=
                {<button> Forget Password </button>}
                position="right center">
                <div>
                <Components.Input name="forgetemail" type="email" placeholder="Email" value={user.forgetemail}  onChange={getUserData} />
                </div>
                <button onClick={onForgetPassword}>Click here</button>
            </Popup>
           </Components.Anchor>
          <Components.Button onClick={onLogin}>Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>
      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>
          <Components.LeftOverlayPanel signingIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => 
            toggle(true)
            }>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel signingIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
    </div>
    </>
  )
}

export default Login;







