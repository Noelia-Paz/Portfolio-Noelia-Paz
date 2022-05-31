import React from "react";
import "./aboutMe.scss";
import node from "../../Images/node.png";
import css from "../../Images/css.png";
import js from "../../Images/js.png";
import github from "../../Images/github.png";
import react from "../../Images/react.png";
import html5 from "../../Images/html5.svg";

function AboutMe() {
  const icons = [node, css, js, github, react, html5];

  return (
    <div
      className="d-flex justify-content-around about_me_container py-5"
      id="aboutMe"
    >
      <div>
        <div className="cardAbout text-dark bg-light mb-3 shadow p-3 mb-5 bg-body rounded about_me_card">
          <div className="card-body card_body">
            <h2 className="card-title">Sobre Mi</h2>
            <p>
              Soy Noelia Paz.
              <br />
              Técnica en Higiene y Seguridad del Trabajo.
              <br />
              En este tiempo estuve experimentando la programación web y me ha
              encantado y es por esto que decidí dedicarme a este rubro.
              <br />
              Estoy buscando un puesto de tiempo completo en desarrollo web,
              donde pueda aplicar mis conocimientos y seguir aprendiendo, con el
              fin de beneficiar a la empresa y en forma profesional.
              <br />
              Además, me encantan los nuevos desafíos , colaborar y trabajar en
              equipo.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center">Mis Habilidades</h2>
        <div className="icons">
          {icons.map((icon, index) => {
            return <img src={icon} className="icon" key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
