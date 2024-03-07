const Proyetos = () => {
  return (
    <div id="proyectos">
      <h2 className="tituloproyectos">Proyectos</h2>
      <div className="proyecto-container">
        <div className="proyecto-card">
          <img
            src="../../public/Apple Store Mendoza.png"
            alt="Apple Store Mendoza"
            className="proyecto-img"
          />
          <h3 className="proyecto-title">Apple Store Mendoza</h3>
          <p className="proyecto-description">
            Ecommerce completo utilizando tecnologías como React y Firebase. La
            plataforma ofrece una experiencia de compra fluida para productos
            Apple, con un catálogo actualizado y funcionalidades como carrito de
            compras y procesamiento de pedidos en tiempo real.
          </p>

          <a
            target="_blank"
            href="https://entrega-final-react-perez-caram.vercel.app/"
            className="proyecto-link"
          >
            Visitar el sitio
          </a>
        </div>
        <div className="proyecto-card">
          <img
            src="../../public/weatherapp.png"
            alt="Apple Store Mendoza"
            className="proyecto-img"
          />
          <h3 className="proyecto-title">Weather App</h3>
          <p className="proyecto-description">
            Aplicación del clima utilizando React y Weather API . Permite
            obtener información meteorológica de distintas ciudades. Al ingresar
            el nombre de la ciudad, obtienes datos precisos junto con una
            representación visual, ofreciendo una experiencia informativa y
            atractiva.
          </p>
          <a
            target="_blank"
            href="https://weather-app-phi-hazel.vercel.app/" // Agrega la URL correcta para "Visitar el sitio"
            className="proyecto-link"
          >
            Visitar el sitio
          </a>
        </div>
        <div className="proyecto-card">
          <img
            src="../../public/snake.png"
            alt="snake"
            className="proyecto-img"
          />
          <h3 className="proyecto-title">Snake</h3>
          <p className="proyecto-description">
            Una versión moderna y atractiva del clásico juego Snake utilizando
            tecnologías HTML, CSS y JavaScript. Sumérgete en la nostalgia
            mientras juegas este icónico juego, donde controlas una serpiente
            que crece con cada pieza de comida que consumes.
          </p>
          <a
            target="_blank"
            href="https://snake-game-mpc.vercel.app/"
            className="proyecto-link"
          >
            Visitar el sitio
          </a>
        </div>
        <div className="proyecto-card">
          <img
            src="../../public/anotadorgastos.png"
            alt="anotador gastos"
            className="proyecto-img"
          />
          <h3 className="proyecto-title">Anotador de gastos</h3>
          <p className="proyecto-description">
            He creado una práctica aplicación de anotación de gastos con React y
            Local Storage. Con esta herramienta, puedes registrar tus gastos
            diarios, seleccionar el método de pago y editar montos y motivos
            fácilmente para una gestión financiera eficiente en tu rutina
            diaria.
          </p>
          <a
            target="_blank"
            href="https://anotador-gastos-mpc.vercel.app/"
            className="proyecto-link"
          >
            Visitar el sitio
          </a>
        </div>

        <div className="proyecto-card">
          <img
            src="../../public/conversor.png"
            alt="Apple Store Mendoza"
            className="proyecto-img"
          />
          <h3 className="proyecto-title">Conversor de monedas</h3>
          <p className="proyecto-description">
            Aplicación para dispositivos móviles que permite la conversión de
            monedas. Construida con React y aprovechando el almacenamiento
            local, ofrece una interfaz intuitiva para realizar conversiones
            monetarias de manera práctica y rápida en cualquier momento.
          </p>
          <a
            target="_blank"
            href="https://conversor-monedas-two.vercel.app/"
            className="proyecto-link"
          >
            Visitar el sitio
          </a>
        </div>
        <div className="proyecto-card">
          <img
            src="../../public/to do app.png"
            alt="Apple Store Mendoza"
            className="proyecto-img"
          />
          <h3 className="proyecto-title">To do app</h3>
          <p className="proyecto-description">
            Aplicación clásica de lista de tareas (To-Do) utilizando React y
            Local Storage. Esta aplicación te permite gestionar tus tareas
            diarias, agregar nuevas, marcarlas como completadas y mantener tu
            lista organizada, todo de manera eficiente y sencilla.{" "}
          </p>
          <a
            target="_blank"
            href="https://to-do-app-one-omega.vercel.app/"
            className="proyecto-link"
          >
            Visitar el sitio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proyetos;
