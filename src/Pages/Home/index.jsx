import Layout from "../../Components/Layout";
import Inicio from "../Inicio";
import AboutMe from "../AboutMe";
import Technologies from "../Technologies";
import Certificates from "../Certificates";
import Contact from "../Contact";
import Projects from "../Projects";
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
