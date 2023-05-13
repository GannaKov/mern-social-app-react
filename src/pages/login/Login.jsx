import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  console.log(user);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
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
            <button className="loginButton" type="submit" disabled={isFetching}>
              {/* //disabled={isFetching} */}
              {isFetching ? (
                <CircularProgress sx={{ color: "#fff" }} size={25} />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress sx={{ color: "#fff" }} size={25} />
              ) : (
                " Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
