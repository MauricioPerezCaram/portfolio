import Inicio from "./components/Inicio";
import NavBar from "./components/NavBar";
import Proyectos from "./components/Proyetos";
import Tecnologias from "./components/Tecnologias";
import SobreMi from "./components/SobreMi";
import Contacto from "./components/Contacto";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar></NavBar>
      <Inicio></Inicio>
      <Proyectos></Proyectos>
      <Tecnologias></Tecnologias>
      <SobreMi></SobreMi>
      <Contacto></Contacto>
    </div>
  );
}

export default App;
