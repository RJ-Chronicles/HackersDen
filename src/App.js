import { useState, useEffect } from "react";
import "./App.css"; 
import "./assets/css/dashBoard.css";
import  db  from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Login from "./components/auth/Login";
import Homepage from "./components/Homepage";
import DoctorDashboard from "./components/Dashboards/DoctorDashboard";
import PatientDashboard from "./components/Dashboards/PatientDashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);

    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    
  }, []);

  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/PatientDashboard" element={<PatientDashboard />} />
          <Route path="/DoctorDashboard" element={<DoctorDashboard />} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
