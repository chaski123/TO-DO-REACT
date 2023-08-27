import React from "react";
import Tarea from "./Tarea";

const Tareas = ( {tareasArray, eliminarTarea, actualizarTarea} )=>{
    return(
        <div className="my-5">
            <h2 className="mb-2 text primary text-center text-primary">Tareas</h2>
            <ul>
            {tareasArray.length > 0 ? tareasArray.map((item) => (
                <Tarea eliminarTarea={eliminarTarea} actualizarTarea={actualizarTarea} item={item} key={item.id}/>
            )): <div className="text-dark text-center fw-bold bg-info bg-opacity-10 border border-info">No hay tareas</div>}
            </ul>
            
        </div>
    )
}

export default Tareas