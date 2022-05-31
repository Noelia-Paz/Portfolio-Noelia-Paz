import React from "react";
import "./works.scss";
import img1 from "../../Images/tarjeta.gif";
import img2 from "../../Images/notas.gif";
import img3 from "../../Images/montañas.gif";

function Works() {
  const projects = [
    {
      image: img1,
      title: "App Tarjetas",
      description:
        "En este proyecto es necesario registrarse para acceder a todas las funciones. Una vez que ingresa el usuario podrá insertar, eliminar, y actualizar tarjetas.",
      frameworks: ["React", "Nodejs", "Sequelize"],
      href: "https://github.com/Noelia-Paz/blogs-crud",
    },
    {
      image: img2,
      title: "App Notas",
      description:
        "La función de este proyecto es agregar notas con un título y descripción, el usuario una vez registrado  va a poder insertar, eliminar, y actualizar las notas.",
      frameworks: ["Express", "Mongoose"],
      href: "https://github.com/Noelia-Paz/App-Notas",
    },
    {
      image: img3,
      title: "App Montañas Rusas",
      description:
        "Es una App que en su galeria muestra imagenes de diferentes montañas rusas y podras acceder a los detalles de cada una.",
      frameworks: ["MongoDB", "Express", "React", "Nodejs"],
      href: "https://github.com/Noelia-Paz/roller-coaster-app-frontend",
    },
  ];

  return (
    <div className="Content " id="works">
      <p className="textP">MIS PROYECTOS</p>
      <h1 className="Texth1">
        Cada uno de estos proyectos fueron realizados con diferentes
        tecnologías, que se detallan a continuación.
      </h1>
      <div className="card-container">
        {projects.map((project, index) => {
          return (
            <div className="card" key={index}>
              <img src={project.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <ul>
                  Tecnologías:
                  {project.frameworks.map((framework, index) => {
                    return <li key={index}>{framework}</li>;
                  })}
                </ul>
                <a href={project.href} className="btnVer btn btn-primary">
                  Ver Proyecto
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Works;

/*import React from "react";
import "./works.scss";
import img1 from "../../Images/tarjeta.gif";
import img2 from "../../Images/notas.gif";
import img3 from "../../Images/montañas.gif";

function Works() {
  const projects = [
    {
      image: img1,
      title: "App Tarjetas",
      description:
        "En este proyecto es necesario registrarse para acceder a todas las funciones. Una vez que ingresa el usuario podrá insertar, eliminar, y actualizar tarjetas.",
      frameworks: ["React", "Nodejs", "Sequelize"],
      href: "https://github.com/Noelia-Paz/blogs-crud",
    },
    {
      image: img2,
      title: "App Notas",
      description:
        "La función de este proyecto es agregar notas con un título y descripción, el usuario una vez registrado  va a poder insertar, eliminar, y actualizar las notas.",
      frameworks: ["Express", "Mongoose"],
      href: "https://github.com/Noelia-Paz/App-Notas",
    },
    {
      image: img3,
      title: "App Montañas Rusas",
      description:
        "Es una App que en su galeria muestra imagenes de diferentes montañas rusas y podras acceder a los detalles de cada una.",
      frameworks: ["MongoDB", "Express", "React", "Nodejs"],
      href: "https://github.com/Noelia-Paz/roller-coaster-app-frontend",
    },
  ];

  return (
    <div className="Content " id="works">
      <div className="title">
        <p>MIS PROYECTOS</p>
        <h1>
          Cada uno de estos proyectos fueron realizados con diferentes
          tecnologías, que se detallan a continuación.
        </h1>
      </div>
      <div className="card_container">
        {projects.map((project) => {
          return (
            <div className="card">
              <img src={project.image} class="card-img-top" />
              <div className="card-body">
                <h5 className="card-title text-center">{project.title}</h5>
                <p className="card-text ">{project.description}</p>
                <ul>
                  Tecnologías:
                  {project.frameworks.map((framework) => {
                    return <li>{framework}</li>;
                  })}
                </ul>
              </div>
              <div className="buttonVer text-center ">
                <button href={project.href} className="btn btn-success">
                  Ver Proyecto
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Works;

/*<div className="title">
        <p>MIS PROYECTOS</p>
        <h1>
          Cada uno de estos proyectos fueron realizados con diferentes
          tecnologías, que se detallan a continuación.
        </h1>
      </div>
      <div className="card_container">
        {projects.map((project) => {
          return (
            <div className="card">
              <img src={project.image} class="card-img-top" />
              <div className="card-body">
                <h5 className="card-title text-center">{project.title}</h5>
                <p className="card-text fs-6">{project.description}</p>
                <ul>
                  Tecnologías:
                  {project.frameworks.map((framework) => {
                    return <li>{framework}</li>;
                  })}
                </ul>
              </div>
              <div className="text-center p-2">
                <a href={project.href} className="btn btn-success">
                  Ver Proyecto
                </a>
              </div>
            </div>
          );
        })}
      </div>*/
