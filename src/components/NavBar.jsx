import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function BasicExample() {
  return (
    <Navbar expand="lg">
      <Container>
        <div className="navbar">
          <Nav.Link href="#inicio" className="item">
            Inicio
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#proyectos" className="item">
                Proyectos
              </Nav.Link>
              <Nav.Link href="#tecnologias" className="item">
                Tecnologías
              </Nav.Link>
              <Nav.Link href="#sobremi" className="item">
                Sobre mi
              </Nav.Link>
              <Nav.Link href="#contacto" className="item">
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
