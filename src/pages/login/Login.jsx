import { useRef } from "react";
import "./login.css";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    console.log(email.current.value);
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">GannaSocial</h3>
          <span className="loginDesc">Be with your friends on GannaSocial</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              minLength="6"
              required
              className="loginInput"
              ref={password}
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
