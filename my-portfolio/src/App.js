import Home from "./Pages/home";
import { Routes,Route } from "react-router-dom";
import AboutMe from "./Pages/aboutme";
import Qualifications from "./Pages/qualifications";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/aboutMe" element={<AboutMe/>} />
      <Route path="/qualification" element={<Qualifications/>} />
    </Routes>
  );
}

export default App;
