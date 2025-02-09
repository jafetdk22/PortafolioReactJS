import React from "react";

const Layout = React.lazy(() => import('../../Components/Layout'));
const Inicio = React.lazy(() => import('../Inicio'));
const AboutMe = React.lazy(() => import('../AboutMe'));
const Technologies = React.lazy(() => import('../Technologies'));
const Certificates = React.lazy(() => import('../Certificates'));
const Contact = React.lazy(() => import('../Contact'));
const Projects = React.lazy(() => import('../Projects'));

import "./Home.css";

const Home = () => {
 
  return (
    <Layout>
      <div className="home-container ms-0">
        <Inicio />
        <AboutMe />
        <Technologies />
        <Projects />
        <Certificates />
        <Contact />
      </div>
    </Layout>
  );
};

export default Home;
