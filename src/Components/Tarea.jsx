import React from "react";

const Tarea = ( {item, eliminarTarea, actualizarTarea} )=>{

    const {title, description, state, priority, id} = item

    return (
        <li className="list-group-item d-flex justify-content-between align-items-start mt-2 p-2 border bg-dark text-white">
            <div className="ms-2 e-auto">
                <div className="fw-bold">
                    {title}
                </div>
                <p>{description}</p>
                <div>
                    <button className="btn btn-sm btn-danger me-1" onClick={()=> eliminarTarea(id)}>Eliminar</button>
                    <button className="btn btn-sm btn-warning me-1" onClick={()=> actualizarTarea(id)}>Editar</button>
                </div>
            </div>
            {state === false ? <span className="bagde text-dark bg-info rounded-pill p-1 me-auto fw-bold">pendiente</span>:  <span className="bagde text-white bg-success rounded-pill p-1 me-auto fw-bold">Completado</span>}
            {priority === false ? <span className="bagde text-dark bg-warning rounded-pill p-1">no prioritario</span>: <span className="bagde text-white bg-primary rounded-pill p-1">prioritario</span>}
        </li>
    )
}

export default Tarea