import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from 'react';
const Navbar = React.lazy(() => import('../../Components/NavBar'));
const Home = React.lazy(() => import('../Home'));
const NotFound = React.lazy(() => import('../NotFound'));
import { PortafolioProvider } from "../../Context";
import "./App.css";
import Modal from "../../Components/Modal/Modal";
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
    <PortafolioProvider>
      <BrowserRouter>
        <Modal/>
        <Navbar/>
        <Suspense fallback={<div>Cargando...</div>}>
          <AppRoutes/>
        </Suspense>
      </BrowserRouter>
    </PortafolioProvider>

  );
};

export default App;
