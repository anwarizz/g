import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        console.log(userCredential)
        return navigate('/')
      })
      .catch((error) => {
        console.log(error.message)
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="m-auto flex flex-col md:w-[400px] w-[80%] gap-4 mt-[100px]"
    >
      <p>Sssssst🤫</p>
      <input
        onChange={(e) => setUsername(e.target.value)}
        className="border border-black h-[30px] shadow-lg px-3"
        type="text"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        className="border border-black h-[30px] shadow-lg px-3"
        type="password"
      />
      <button type="submit" className="bg-black text-white shadow-lg">
        Enter
      </button>
    </form>
  );
}
