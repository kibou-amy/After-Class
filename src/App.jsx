
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Profilemodal from "./pages/Profilemodal";
import "./index.css";
function App() {
  return(
  
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profilemodal />} />
  </Routes>
  </BrowserRouter>

);
}

export default App;
