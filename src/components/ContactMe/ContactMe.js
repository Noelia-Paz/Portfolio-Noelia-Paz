import emailjs from "@emailjs/browser";
import React from "react";
import swal from "sweetalert";
import "./contactMe.scss";

function ContactMe() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_0tn7dj8",
      "template_1dovcxn",
      e.target,
      "QvBuxbHtSWiZHY-0s"
    );

    swal({
      text: "Se envio con exito!",
      icon: "success",
    }).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  }
  return (
    <div className="contact " id="contactMe">
      <div className="contactoForm">
        <div>
          <h1 id="contacto">Gracias por ponerte en contacto!</h1>
        </div>
        <form onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Nombre" required />
          <input type="text" name="last" placeholder="Apellido" required />
          <input
            type="email"
            name="email"
            placeholder="Correo Electronico"
            required
          />
          <input
            type="text"
            name="message"
            placeholder="Mensaje"
            className="message"
            required
          />
          <div>
            <button className="btn btn-outline-success" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
