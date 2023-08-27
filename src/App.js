import React, {useState} from "react";
import FormularioControlado from "./Components/FormularioControlado";
import Tareas from "./Components/Tareas";

const defaultTareas = [
  {
    id: 1,
    title: 'Tarea#1',
    description: 'Descripcion#1',
    state: false,
    priority: false
  },
  {
    id: 2,
    title: 'Tarea#2',
    description: 'Descripcion#2',
    state: true,
    priority: false
  },
  {
    
    id: 3,
    title: 'Tarea#3',
    description: 'Descripcion#3',
    state: true,
    priority: true
  }
]

function App() {
  const[tareasArray, setTareasArray] = useState(defaultTareas)

  // tarea es un parametro donde pasaremos la nueva tarea a agregar
  const agregarTarea = (tarea) =>{
    setTareasArray([...tareasArray, tarea])
  }

  const eliminarTarea = (id) =>{
    const arrayFiltrado = tareasArray.filter((item) => item.id !== id)
    setTareasArray(arrayFiltrado)
  }

  const actualizarTarea = (id) =>{
    const arrayFiltrado = tareasArray.map((item) => {
      if(item.id === id){
        item.state = !item.state
      }
      return item
    })
    setTareasArray(arrayFiltrado)
  }

  return (
    <>
      <div className="container my-3">
        <h2 className="mb-3 text-primary">Formulario</h2>
        <FormularioControlado agregarTarea={agregarTarea}/>
        <Tareas tareasArray={tareasArray} eliminarTarea={eliminarTarea} actualizarTarea={actualizarTarea}/>
      </div>
    </>
  );
}

export default App;
