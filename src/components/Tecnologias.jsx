import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

const Tecnologias = () => {
  return (
    <section id="tecnologias" className="contenedor">
      <h2 className="titulos">Tecnologías con las que desarrollo</h2>
      <div className="tecnologias">
        <div className="logotecnologia">
          <img src="/html.png" alt="html" />
          <h4 className="tecnologiatexto">HTML</h4>
        </div>
        <div className="logotecnologia">
          <img src="/CSS3_logo.svg.png" alt="css" />
          <h4 className="tecnologiatexto">CSS</h4>
        </div>
        <div className="logotecnologia">
          <img src="/JavaScript-logo.png" alt="JavaScript" />
          <h4 className="tecnologiatexto">JavaScript</h4>
        </div>
        <div className="logotecnologia">
          <img src="/react-1-logo-png-transparent.png" alt="React" />
          <h4 className="tecnologiatexto">React Js</h4>
        </div>
        <div className="logotecnologia">
          <img src="/express-js.png" alt="Express Js" />
          <h4 className="tecnologiatexto">Express Js</h4>
        </div>
        <div className="logotecnologia">
          <img src="/bootstrap.png" alt="bootstrap" />
          <h4 className="tecnologiatexto">Bootstrap</h4>
        </div>
        <div className="logotecnologia">
          <img src="/1920px-Node.js_logo.svg.png" alt="Node Js" />
          <h4 className="tecnologiatexto">Node Js</h4>
        </div>
        <div className="logotecnologia">
          <img src="/mongodb.png" alt="mongodb" />
          <h4 className="tecnologiatexto">Mongo DB</h4>
        </div>
        <div className="logotecnologia">
          <img src="/git.png" alt="git" />
          <h4 className="tecnologiatexto">Git</h4>
        </div>
        <div className="logotecnologia">
          <img src="/github.svg" alt="github" />
          <h4 className="tecnologiatexto">GitHub</h4>
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
