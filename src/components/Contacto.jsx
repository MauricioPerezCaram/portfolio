import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_zp22qlx", "template_qbjqs21", form.current, {
        publicKey: "s66MoYglzRtHZbvAC",
      })
      .then(
        () => {
          Swal.fire({
            title: "Mensaje enviado",
            text: "Pronto me pondre en contacto",
            icon: "success",
          });
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  const [t, i18n] = useTranslation("global");

  return (
    <section className="contenedor" id="contacto">
      <h2 className="titulos">{t("contacto.titulo")}</h2>
      <div className="contenedor-contacto">
        <div className="formulario">
          <form ref={form} onSubmit={sendEmail} className="field">
            <label>{t("contacto.nombre")}</label>
            <input type="text" name="user_name" required />
            <label>{t("contacto.email")}</label>
            <input type="email" name="user_email" required />
            <label>{t("contacto.mensaje")}</label>
            <textarea name="message" required />
            <input className="proyecto-link" type="submit" value="Enviar" />
          </form>
        </div>
        <div className="githublinkedin">
          <div className="redes">
            <a
              href="https://www.linkedin.com/in/mauricioperezcaram/"
              target="_blank"
              className="a"
            >
              <h4 className="contactate">{t("contacto.linkedin")}</h4>
              <img
                src="/linkedin.png"
                alt="logo linkedin"
                className="logocontacto"
              />
            </a>
          </div>
          <div className="redes">
            <a
              href="https://github.com/MauricioPerezCaram"
              target="_blank"
              className="a"
            >
              <h4 className="contactate">{t("contacto.github")}</h4>
              <img
                src="/github.svg"
                alt="logo github"
                className="logocontacto"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
