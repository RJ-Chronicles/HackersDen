import React, { useEffect,useState } from 'react';
import "./Login.css";
import  db  from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
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

const Login = () => {
  const [signIn, toggle] = React.useState(true);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    forgetemail: "",
  })
  const usersCollectionRef = collection(db, "users");
  const createUser = async (newName,NewEmail) => {
    await addDoc(usersCollectionRef, { name: newName, email: NewEmail });
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
          // navigate("/home")
          console.log(user);
          if(user){
            console.log("User loggeed in Successfully");
            alert("User loggeed in Successfully")
          }
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
          alert("Something Went wrong try later");
      });
  }

  const onSignUp = async (e) => {
    e.preventDefault()
    await createUser(user.name,user.email);
    await createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          alert("sign up successfull")
          // navigate("/login")
          // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
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
     <Components.Container>
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input name="name" type="text" placeholder="Name" value={user.name} onChange={getUserData}/>
          <Components.Input name="email" type="email" placeholder="Email" value={user.email} onChange={getUserData} />
          <Components.Input name="password" type="password" placeholder="Password" value={user.password} onChange={getUserData} />
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







