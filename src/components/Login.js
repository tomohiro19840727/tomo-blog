import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, provider } from "../firebase"; 

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
const loginInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    localStorage.setItem("isAuth", true );
     setIsAuth(true);
     navigate("/");
  });
}

  return (
    <div>
      <p>ログインし始める</p>
      <button onClick={loginInWithGoogle}>Gooleでログイン</button>
    </div>
  )
}

export default Login