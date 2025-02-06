import Layout from "../../Components/Layout";
import Tecnology from "../../Components/Tecnology";
import { TiHtml5,TiCss3} from "react-icons/ti";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiElasticsearch,SiPostman,SiGooglecolab } from "react-icons/si";
import { FaPhp, FaReact,FaLaravel,FaGit,FaGithub,FaBootstrap,FaDocker} from "react-icons/fa";

import { DiJsBadge,DiJqueryLogo,DiMysql,DiSass,DiVisualstudio,DiSublime,DiNetmagazine,DiNpm,DiDotnet } from "react-icons/di";

import "./Home.css";

const Home = () => {
  return (
    <Layout>

      <div className="home-container">
        <section className="hero-section">
          <div className="hero-content">
            <h1>
              ¡Hola! Soy <span className="highlight">Jafet Solano</span>
            </h1>
            <h2>Desarrollador Web Full Stack</h2>
            <p className="hero-description">
              Apasionado por crear experiencias web únicas y funcionales.
              Especializado en tecnologías modernas de desarrollo.
            </p>
            <div className="cta-buttons">
              <a href="#proyectos" className="btn primary">
                Ver Proyectos
              </a>
              <a href="#contacto" className="btn secondary">
                Contactar
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="../../public/images/Jafet.png" alt="Foto de perfil" />
          </div>
        </section>
        <section className="skills-section">
          <h2>Tecnologías</h2>
          <div className="skills-grid">
            {/* Lenguajes Principales */}
            <Tecnology icon={<TiHtml5 />} name="HTML" time="5" level={75} />
            <Tecnology icon={<TiCss3 />} name="CSS" time="5" level={75} />
            <Tecnology icon={<DiJsBadge />} name="JavaScript" time="5" level={75} />
            <Tecnology icon={<FaPhp />} name="PHP" time="5" level={75} />
            <Tecnology icon={<DiSass/>} name="SASS" time="5" level={75} />

            {/* Frameworks y Librerías */}
            <Tecnology icon={<FaReact />} name="React JS" time="5" level={75} />
            <Tecnology icon={<FaLaravel />} name="Laravel" time="5" level={75} />
            <Tecnology icon={<DiJqueryLogo/>} name="Jquery" time="5" level={75} />
            <Tecnology icon={<FaBootstrap />} name="Bootstrap" time="5" level={75} />
            <Tecnology icon={<RiTailwindCssFill />} name="Tailwind" time="5" level={75} />
            <Tecnology icon={<DiNetmagazine/>} name=".Net Core" time="5" level={75} />
            <Tecnology icon={<DiDotnet/>} name="Dotnet" time="5" level={75} />

            {/* Herramientas de Desarrollo */}
            <Tecnology icon={<FaGit />} name="Git" time="5" level={75} />
            <Tecnology icon={<FaGithub />} name="GitHub" time="5" level={75} />
            <Tecnology icon={<DiVisualstudio/>} name="Visual Studio" time="5" level={75} />
            <Tecnology icon={<DiVisualstudio/>} name="Visual Studio Code" time="5" level={75} />
            <Tecnology icon={<DiSublime/>} name="Sublime Text" time="5" level={75} />
            <Tecnology icon={<DiNpm/>} name="NPM" time="5" level={75} />
            <Tecnology icon={<SiPostman />} name="Postman" time="5" level={75} />
            <Tecnology icon={<FaDocker />} name="Docker" time="5" level={75} />
            <Tecnology icon={<SiGooglecolab/>} name="Google Colab" time="5" level={75} />

            {/* Base de Datos y Backend */}
            <Tecnology icon={<DiMysql />} name="MySQL" time="5" level={75} />
            <Tecnology icon={<SiElasticsearch />} name="Elasticsearch" time="5" level={75} />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
