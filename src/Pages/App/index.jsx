import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Home";
import NotFound from "../NotFound";

import Navbar from "../../Components/NavBar";
import "./App.css";

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
  );
};

const App = () => {
  return (
      <BrowserRouter>
        <Navbar/>
        <AppRoutes/>
      </BrowserRouter>
  );
};

export default App;
