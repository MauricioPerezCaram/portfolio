import { useTranslation } from "react-i18next";

const Tecnologias = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section id="tecnologias" className="contenedor">
      <h2 className="titulos">{t("tecnologias.h2")}</h2>
      <div className="tecnologias">
        <div
          className="logotecnologia"
          data-aos="fade-right"
          data-aos-delay="150"
        >
          <img src="/html.png" alt="html" />
          <h4 className="tecnologiatexto">HTML</h4>
        </div>
        <div
          className="logotecnologia"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <img src="/CSS3_logo.svg.png" alt="css" />
          <h4 className="tecnologiatexto">CSS</h4>
        </div>
        <div
          className="logotecnologia"
          data-aos="fade-right"
          data-aos-delay="450"
        >
          <img src="/JavaScript-logo.png" alt="JavaScript" />
          <h4 className="tecnologiatexto">JavaScript</h4>
        </div>
        <div
          className="logotecnologia"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <img src="/react-1-logo-png-transparent.png" alt="React" />
          <h4 className="tecnologiatexto">React Js</h4>
        </div>
        <div
          className="logotecnologia"
          data-aos="fade-right"
          data-aos-delay="750"
        >
          <img src="/express-js.png" alt="Express Js" />
          <h4 className="tecnologiatexto">Express Js</h4>
        </div>
        <div
          className="logotecnologia"
          data-aos="fade-right"
          data-aos-delay="900"
        >
          <img src="/bootstrap.png" alt="bootstrap" />
          <h4 className="tecnologiatexto">Bootstrap</h4>
        </div>
        <div
          className="logotecnologia"
          data-aos="fade-right"
          data-aos-delay="1150"
        >
          <img src="/1920px-Node.js_logo.svg.png" alt="Node Js" />
          <h4 className="tecnologiatexto">Node Js</h4>
        </div>
        <div
          className="logotecnologia"
          data-aos="fade-right"
          data-aos-delay="1300"
        >
          <img src="/mongodb.png" alt="mongodb" />
          <h4 className="tecnologiatexto">Mongo DB</h4>
        </div>
        <div
          className="logotecnologia"
          data-aos="fade-right"
          data-aos-delay="1450"
        >
          <img src="/git.png" alt="git" />
          <h4 className="tecnologiatexto">Git</h4>
        </div>
        <div
          className="logotecnologia"
          data-aos="fade-right"
          data-aos-delay="1600"
        >
          <img src="/github.svg" alt="github" />
          <h4 className="tecnologiatexto">GitHub</h4>
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
