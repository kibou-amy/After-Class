import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profilemodal from "./pages/Profilemodal";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Messages from "./pages/Messages";
import Coaches from "./pages/Coaches";
import Formation from "./pages/Formation";

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
        <Route path="/formation" element={<Formation />} />
      </Routes>
    </Router>
  );
}

export default App;