import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profilemodal from "./pages/Profilemodal";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Messages from "./pages/Messages";
<<<<<<< HEAD
import Coaches from "./pages/Coaches";
import Formation from "./pages/Formation";
=======
import Coaches from "./pages/Coaches"; // Added Dashboard imports here
import AdminDash from "./pages/AdminDash";
import StudentsList from "./pages/StudentsList";
import AddStudent from "./pages/AddStudent";

>>>>>>> 34eedfa60f89c0e28d83796cfa77b747a0728367

import "./index.css";
import "./styles/auth.css";
import "./styles/Messages.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Friend's pages */}
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profilemodal />} />

        {/* Your pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/coaches" element={<Coaches />} />
<<<<<<< HEAD
        <Route path="/formation" element={<Formation />} />
=======
        <Route path="/AdminDash" element={<AdminDash />} />
        <Route path="/StudentsList" element={<StudentsList />} />
        <Route path="/AddStudent" element={<AddStudent />} />

>>>>>>> 34eedfa60f89c0e28d83796cfa77b747a0728367
      </Routes>
    </Router>
  );
}

export default App;