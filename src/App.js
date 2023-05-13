import Home from "./pages/home/Home";
import { Routes, Route, Navigate } from "react-router-dom";

import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Register />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
      {/* <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
      <Route path="/register">
        {user ? <Redirect to="/" /> : <Register />}
      </Route> */}
      <Route path="/profile/:username" element={<Profile />} />

      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
//import axios from 'axios';
