import { useTranslation } from "react-i18next";

const Proyetos = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div id="proyectos" className="contenedor">
      <h2 className="titulos">{t("proyectos.projects")}</h2>
      <div className="proyecto-container">
        <div className="proyecto-card">
          <img
            src="/Apple Store Mendoza.png"
            alt="Apple Store Mendoza"
            className="proyecto-img"
          />
          <h3 className="proyecto-title">Apple Store Mendoza</h3>
          <p className="proyecto-description">{t("proyectos.apple")}</p>

          <a
            target="_blank"
            href="https://entrega-final-react-perez-caram.vercel.app/"
            className="proyecto-link"
          >
            {t("proyectos.visitar")}
          </a>
          <a
            target="_blank"
            href="https://github.com/MauricioPerezCaram/EntregaFinalReactPerezCaram"
            className="proyecto-link"
          >
            {t("proyectos.github")}
          </a>
        </div>
        <div className="proyecto-card">
          <img
            src="/weatherapp.png"
            alt="weather app"
            className="proyecto-img"
          />
          <h3 className="proyecto-title">Weather App</h3>
          <p className="proyecto-description">{t("proyectos.weather")}</p>
          <a
            target="_blank"
            href="https://weather-app-phi-hazel.vercel.app/"
            className="proyecto-link"
          >
            {t("proyectos.visitar")}
          </a>
          <a
            target="_blank"
            href="https://github.com/MauricioPerezCaram/Weather-App"
            className="proyecto-link"
          >
            {t("proyectos.github")}
          </a>
        </div>
        <div className="proyecto-card">
          <img src="/snake.png" alt="snake" className="proyecto-img" />
          <h3 className="proyecto-title">Snake</h3>
          <p className="proyecto-description">{t("proyectos.snake")}</p>
          <a
            target="_blank"
            href="https://snake-game-mpc.vercel.app/"
            className="proyecto-link"
          >
            {t("proyectos.visitar")}
          </a>
          <a
            target="_blank"
            href="https://github.com/MauricioPerezCaram/snake"
            className="proyecto-link"
          >
            {t("proyectos.github")}
          </a>
        </div>
        <div className="proyecto-card">
          <img
            src="/anotadorgastos.png"
            alt="anotador gastos"
            className="proyecto-img"
          />
          <h3 className="proyecto-title">My Financial Notepad</h3>
          <p className="proyecto-description">{t("proyectos.anotador")}</p>
          <a
            target="_blank"
            href="https://anotador-gastos-mpc.vercel.app/"
            className="proyecto-link"
          >
            {t("proyectos.visitar")}
          </a>
          <a
            target="_blank"
            href="https://github.com/MauricioPerezCaram/AnotadorDeGastos"
            className="proyecto-link"
          >
            {t("proyectos.github")}
          </a>
        </div>

        <div className="proyecto-card">
          <img src="/conversor.png" alt="conversor" className="proyecto-img" />
          <h3 className="proyecto-title">Converter</h3>
          <p className="proyecto-description">{t("proyectos.conversor")}</p>
          <a
            target="_blank"
            href="https://conversor-monedas-two.vercel.app/"
            className="proyecto-link"
          >
            {t("proyectos.visitar")}
          </a>
          <a
            target="_blank"
            href="https://github.com/MauricioPerezCaram/Mobile-Conversor-Monedas"
            className="proyecto-link"
          >
            {t("proyectos.github")}
          </a>
        </div>
        <div className="proyecto-card">
          <img src="/to do app.png" alt="to do app" className="proyecto-img" />
          <h3 className="proyecto-title">To Do App</h3>
          <p className="proyecto-description">{t("proyectos.todo")}</p>
          <a
            target="_blank"
            href="https://to-do-app-one-omega.vercel.app/"
            className="proyecto-link"
          >
            {t("proyectos.visitar")}
          </a>
          <a
            target="_blank"
            href="https://github.com/MauricioPerezCaram/ToDoApp"
            className="proyecto-link"
          >
            {t("proyectos.github")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proyetos;
