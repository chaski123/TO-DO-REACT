import React, { useRef, useState } from "react";
const FormularioNoControlado = () => {
  const formulario = useRef(null);

  const [error, setError] = useState("");

  const enviarFormulario = (e) => {
    setError("");
    e.preventDefault();
    const form = new FormData(formulario.current);
    const { tarea, descripcion, select } = Object.fromEntries([
      ...form.entries(),
    ]);

    if (!tarea.trim() || !descripcion.trim() || !select.trim()) {
      setError("Complete todos los campos");
      return;
    }
    console.log("formulario enviado");
  };
  return (
    <>
      <form
        ref={formulario}
        onSubmit={(e) => {
          enviarFormulario(e);
        }}
        className="form p-3 bg-dark"
      >
        <input
          type="text"
          placeholder="Ingrese Tarea"
          className="form-control mb-2"
          name="tarea"
        ></input>
        <textarea
          className="form-control mb-2"
          placeholder="Ingrese Descripcion"
          name="descripcion"
        ></textarea>
        <select className="form-select mb-2" name="select">
          <option value="pendiente">pendiente</option>
          <option value="completado">completado</option>
        </select>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
        {error ? <div className="text-danger">{error}</div> : null}
      </form>
    </>
  );
};

export default FormularioNoControlado;
