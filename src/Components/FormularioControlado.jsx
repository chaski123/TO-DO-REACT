import React, { useState } from "react";
import Swal from 'sweetalert2'

const FormularioControlado = ( {agregarTarea} ) => {
  // Hacemos esto para poder trabajar con varios campos de un form sin tener que declarar un useState por cada campo
  const [tarea, setTarea] = useState({
    title: "",
    description: "",
    state: "pendiente",
    priority: false
  });

  const {title, description, state} = tarea

  const enviarFormulario = (e) => {
    e.preventDefault();

    if(!title.trim() || !description.trim()){
      Swal.fire({
        title: 'Error!',
        text: 'Complete todos los campos',
        icon: 'error',
        showConfirmButton: false,
        timer: 2000
      })
      return
    }
    // Esto no entiendo
    agregarTarea ({
      id: Date.now(), //agrega un id a todas las tareas o solo las nuevas??
      ...tarea, // recorre todas las tareas ya creadas
      state: 'completado' === state ? true : false //Esto no entiendo
    })

    Swal.fire({
      title: 'Perfecto!',
      text: 'Tarea agregada con exito',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  };

  const modificarCampo = (e) => {
    setTarea({ ...tarea, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          enviarFormulario(e);
        }}
        className="form m-5 p-3 bg-info"
      >
        <input
          type="text"
          placeholder="Ingrese Tarea"
          className="form-control mb-2"
          name="title"
          value={tarea.title}
          onChange={(e) => modificarCampo(e)}
        ></input>
        <textarea
          className="form-control mb-2"
          placeholder="Ingrese Descripcion"
          name="description"
          value={tarea.description}
          onChange={(e) => modificarCampo(e)}
        ></textarea>
        <select
          className="form-select mb-2"
          name="state"
          value={tarea.state}
          onChange={(e) => modificarCampo(e)}
        >
          <option value="pendiente">pendiente</option>
          <option value="completado">completado</option>
        </select>
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            name="priority"
            checked={tarea.priority}
            onChange={(e) => setTarea({...tarea, priority: e.target.checked})}
          ></input>
          <label className="form-check-label">Prioridad</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  );
};

export default FormularioControlado;
