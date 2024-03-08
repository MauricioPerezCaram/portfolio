import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
          alert("SUCCESS!");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contenedor">
      <h2 className="titulos">Contactate conmigo</h2>
      <div className="contenedor-contacto">
        <div className="formulario">
          <form ref={form} onSubmit={sendEmail} className="field">
            <label>Nombre</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" required />
            <label>Mensaje</label>
            <textarea name="message" required />
            <input className="proyecto-link" type="submit" value="Enviar" />
          </form>
        </div>
        <div className="githublinkedin">
          <div className="redes">
            <a href="https://github.com/MauricioPerezCaram" target="_blank">
              Visita mi Github
            </a>
            <img src="/github.svg" alt="logo github" className="logocontacto" />
          </div>
          <div className="redes">
            <a href="https://linkedin.com/MauricioPerezCaram" target="_blank">
              Visita mi LinkedIn
            </a>
            <img
              href="www.github.com/mauricioperezcaram"
              src="/linkedin.png"
              alt="logo linkedin"
              className="logocontacto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
