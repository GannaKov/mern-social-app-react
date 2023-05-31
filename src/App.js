// import Home from "./pages/home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
// import Profile from "./pages/profile/Profile";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
// import Topbar from "./components/topbar/Topbar";
const Home = lazy(() => import("./pages/home/Home"));
const Profile = lazy(() => import("./pages/profile/Profile"));
const Login = lazy(() => import("./pages/login/Login"));
const Register = lazy(() => import("./pages/register/Register"));
const Topbar = lazy(() => import("./components/topbar/Topbar"));
//-------------------------------------
function App() {
  const { user } = useContext(AuthContext);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* <Routes>
        <Route path="/" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />

        <Route path="/profile/:username" element={<Profile />} />

        <Route path="*" element={<Register />} />
      </Routes> */}
      <Routes>
        <Route path="/" element={!user && <Register />} />
        <Route path="/login" element={!user && <Login />} />
        <Route path="/register" element={!user && <Register />} />
        <Route path="/" element={<Topbar />}>
          <Route index element={user && <Home />} />
          <Route path="profile/:username" element={user && <Profile />} />
          <Route path="*" element={<Register />} />
          {/* //Add not found instad of*/}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
//import axios from 'axios';
