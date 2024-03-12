import React from "react";
import { useTranslation } from "react-i18next";

const Inicio = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section
      className="contenedor-inicio"
      data-aos="fade-up"
      data-aos-duration="1000"
      id="inicio"
    >
      <div className="logo-inicio">
        <img src="/cs.png" alt="foto MPC" />
      </div>
      <div className="texto-inicio">
        <h1>Mauricio Perez Caram</h1>
        <h2>{t("inicio.h2")}</h2>
        <h3>{t("inicio.h3")}</h3>
      </div>
    </section>
  );
};

export default Inicio;
