import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from 'react';
const Navbar = React.lazy(() => import('../../Components/NavBar'));
const Home = React.lazy(() => import('../Home'));
const NotFound = React.lazy(() => import('../NotFound'));
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
        <Suspense fallback={<div>Cargando...</div>}>
          <AppRoutes/>
        </Suspense>
      </BrowserRouter>
  );
};

export default App;
