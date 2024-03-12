import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";

function BasicExample() {
  const [t, i18n] = useTranslation("global");

  return (
    <Navbar expand="lg">
      <Container>
        <div className="navbar">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#inicio" className="item">
                {t("navbar.inicio")}
              </Nav.Link>
              <Nav.Link href="#proyectos" className="item">
                {t("navbar.proyectos")}
              </Nav.Link>
              <Nav.Link href="#tecnologias" className="item">
                {t("navbar.tecnologias")}
              </Nav.Link>
              <Nav.Link href="#sobremi" className="item">
                {t("navbar.sobremi")}
              </Nav.Link>
              <Nav.Link href="#contacto" className="item">
                {t("navbar.contacto")}
              </Nav.Link>
            </Nav>
            <div className="banderitas">
              <img
                onClick={() => i18n.changeLanguage("espanol")}
                src="es.png"
              />

              <img onClick={() => i18n.changeLanguage("ingles")} src="gb.png" />
            </div>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
