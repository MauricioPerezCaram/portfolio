import { useTranslation } from "react-i18next";

const Tecnologias = () => {
  const [t, i18n] = useTranslation("global");

  const delays = [
    0, 250, 500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500, 2750, 3000,
  ];

  return (
    <section id="tecnologias" className="contenedor">
      <h2 className="titulos">{t("tecnologias.h2")}</h2>
      <div className="tecnologias">
        <div
          className="logotecnologia"
          data-aos="fade-right"
          data-aos-delay={delays[0]}
        >
          <img src="/html.png" alt="html" />
          <h4 className="tecnologiatexto">HTML</h4>
        </div>
        <div
          className="logotecnologia"
          data-aos="fade-right"
          data-aos-delay={delays[1]}
        >
          <img src="/CSS3_logo.svg.png" alt="css" />
          <h4 className="tecnologiatexto">CSS</h4>
        </div>
        <div
          className="logotecnologia"
          data-aos="fade-right"
          data-aos-delay={delays[2]}
        >
          <img src="/bootstrap.png" alt="bootstrap" />
          <h4 className="tecnologiatexto">Bootstrap</h4>
        </div>
        <div
          className="logotecnologia"
          data-aos="fade-right"
          data-aos-delay={delays[3]}
        >
          <img src="/JavaScript-logo.png" alt="JavaScript" />
          <h4 className="tecnologiatexto">JavaScript</h4>
        </div>
        <div
          className="logotecnologia"
          data-aos="fade-right"
          data-aos-delay={delays[4]}
        >
          <img src="/react-1-logo-png-transparent.png" alt="React" />
          <h4 className="tecnologiatexto">React Js</h4>
        </div>
        <div
          className="logotecnologia"
          data-aos="fade-right"
          data-aos-delay={delays[5]}
        >
          <img src="/Typescript_logo_2020.svg.png" alt="Typescript" />
          <h4 className="tecnologiatexto">Typescript</h4>
        </div>
        <div
          className="logotecnologia"
          data-aos="fade-right"
          data-aos-delay={delays[6]}
        >
          <img src="/1920px-Node.js_logo.svg.png" alt="Node Js" />
          <h4 className="tecnologiatexto">Node Js</h4>
        </div>
        <div
          className="logotecnologia"
          data-aos="fade-right"
          data-aos-delay={delays[7]}
        >
          <img src="/express-js.png" alt="Express Js" />
          <h4 className="tecnologiatexto">Express Js</h4>
        </div>
        <div
          className="logotecnologia"
          data-aos="fade-right"
          data-aos-delay={delays[8]}
        >
          <img src="/mongodb.png" alt="mongodb" />
          <h4 className="tecnologiatexto">Mongo DB</h4>
        </div>
        <div
          className="logotecnologia"
          data-aos="fade-right"
          data-aos-delay={delays[11]}
        >
          <img src="/git.png" alt="git" />
          <h4 className="tecnologiatexto">Git</h4>
        </div>
        <div
          className="logotecnologia"
          data-aos="fade-right"
          data-aos-delay={delays[12]}
        >
          <img src="/github.svg" alt="github" />
          <h4 className="tecnologiatexto">GitHub</h4>
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
