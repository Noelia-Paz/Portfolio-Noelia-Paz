import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./main.scss";
import img from "../../Images/img1.jpeg";

function Main() {
  return (
    <div className="main_container d-flex justify-content-around" id="main">
      <div className="text">
        <p>HOLA!, ¿COMO ESTAS?</p>
        <h1>Soy Noelia Paz</h1>
        <p>Programadora Full Stack</p>
        <div>
          <a href="https://www.linkedin.com/in/noelia-paz-055a67238/">
            <BsLinkedin className="iconL" />
          </a>
          <a href="https://github.com/Noelia-Paz">
            <BsGithub className="iconG" />
          </a>
        </div>
      </div>
      <div>
        <img src={img} alt="" className="main_img" />
      </div>
    </div>
  );
}

export default Main;
