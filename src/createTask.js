import React from "react";

const CreateTask = ({ textInput, numeroTarea, deletetask }) => {
  const dateCreated = new Date().toLocaleDateString()

  return (
    <div className="task">
      <h1 className="text-primary">Tarea {numeroTarea}</h1>
      <div className="wrapper">
        <div className="task-info">
          <h3>{textInput}</h3>
          <p>Created at: {dateCreated}</p>
        </div>
        <div className="container-btn">
          <button className="btn process">En Proceso</button>
          <button className="btn success">Terminada</button>
          <button className="btn delete" onClick={deletetask}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
