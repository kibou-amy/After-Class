import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profilemodal from "./pages/Profilemodal";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Messages from "./pages/Messages";
import Coaches from "./pages/Coaches"; // 1. Importation du composant Coaches

import "./index.css";
import "./styles/auth.css";
import "./styles/Messages.css";
import "./styles/Coaches.css";



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
        <Route path="/coaches" element={<Coaches />} /> {/* 2. Ajout de la route */}

      </Routes>
    </Router>
  );
}

export default App;