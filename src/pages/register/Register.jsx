import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import axios from "axios";
//--------------------------------
export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Password don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        const BASE_URL = process.env.REACT_APP_BASE_URL;
        await axios.post(`${BASE_URL}/auth/register`, user);
        navigate("/login", { replace: true });
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">GannaSocial</h3>
          <span className="registerDesc">
            Be with your friends on GannaSocial
          </span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={handleSubmit}>
            <input
              placeholder="Username"
              className="registerInput"
              ref={username}
            />
            <input
              placeholder="Email"
              type="email"
              required
              className="registerInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              minLength="6"
              required
              ref={password}
              className="registerInput"
            />
            <input
              placeholder="Password again"
              className="registerInput"
              required
              type="password"
              ref={passwordAgain}
            />
            <button className="registerButton" type="submit">
              Sign Up
            </button>
          </form>
          <button onClick={handleClick} className="registerRegisterButton">
            Log into Account
          </button>
        </div>
      </div>
    </div>
  );
}
//2,13
