import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
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
