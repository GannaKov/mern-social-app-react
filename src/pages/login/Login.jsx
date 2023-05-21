import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
//--------------------------------------------------
export default function Login() {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  const handleClick = () => {
    navigate("/register");
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">GannaSocial</h3>
          <span className="loginDesc">Be with your friends on GannaSocial</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
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
          </form>
          <button className="loginRegisterButton" onClick={handleClick}>
            {isFetching ? (
              <CircularProgress sx={{ color: "#fff" }} size={25} />
            ) : (
              " Create a New Account"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
