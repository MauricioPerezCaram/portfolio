import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

const Tecnologias = () => {
  return (
    <div id="tecnologias">
      <h2 className="titulos">Tecnologias con las que desarrollo</h2>
      <Container>
        <Row>
          <Col xs={3} md={2} className="logotecnologia">
            <Image src="/public/html.png" rounded />
            <h4 className="tecnologiatexto">HTML</h4>
          </Col>
          <Col xs={3} md={2} className="logotecnologia">
            <Image src="/public/CSS3_logo.svg.png" rounded />
            <h4 className="tecnologiatexto">CSS</h4>
          </Col>
          <Col xs={3} md={2} className="logotecnologia">
            <Image src="/public/JavaScript-logo.png" rounded />
            <h4 className="tecnologiatexto">JavaScript</h4>
          </Col>
          <Col xs={3} md={2} className="logotecnologia">
            <Image src="/public/react-1-logo-png-transparent.png" rounded />
            <h4 className="tecnologiatexto">React Js</h4>
          </Col>
          <Col xs={3} md={2} className="logotecnologia">
            <Image src="/public/express-js.png" rounded />
            <h4 className="tecnologiatexto">Express Js</h4>
          </Col>
          <Col xs={3} md={2} className="logotecnologia">
            <Image src="/public/bootstrap.png" rounded />
            <h4 className="tecnologiatexto">Bootstrap</h4>
          </Col>
          <Col xs={3} md={2} className="logotecnologia">
            <Image src="/public/1920px-Node.js_logo.svg.png" rounded />
            <h4 className="tecnologiatexto">Node Js</h4>
          </Col>
          <Col xs={3} md={2} className="logotecnologia">
            <Image src="/public/mongodb.png" rounded />
            <h4 className="tecnologiatexto">Mongo DB</h4>
          </Col>{" "}
          <Col xs={3} md={2} className="logotecnologia">
            <Image src="/public/git.png" rounded />
            <h4 className="tecnologiatexto">Git</h4>
          </Col>{" "}
          <Col xs={3} md={2} className="logotecnologia">
            <Image src="/public/github.svg" rounded />
            <h4 className="tecnologiatexto">GitHub</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Tecnologias;
