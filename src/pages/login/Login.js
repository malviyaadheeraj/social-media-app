import React, { useRef } from "react";
import "./Login.css";
import { auth } from "../../firebase";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with your friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              type="email"
              className="loginInput"
              placeholder="Email"
              ref={emailRef}
              required
            />
            <input
              type="password"
              className="loginInput"
              placeholder="Password"
              ref={passwordRef}
              required
            />
            <button className="loginButton" onClick={signIn}>
              Log In
            </button>
            <span className="loginForgot">New to Lamasocial?</span>
            <button className="loginRegisterButton" onClick={register}>
              Create a new Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
