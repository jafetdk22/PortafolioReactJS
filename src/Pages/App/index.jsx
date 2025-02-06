import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Home";
import NotFound from "../NotFound";
import AboutMe from "../AboutMe";
import Projects from "../Projects";
import Contact from "../Contact";
import Courses from "../Courses";
import Navbar from "../../Components/NavBar";

import "./App.css";

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
  );
};

const App = () => {
  return (
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
  );
};

export default App;
