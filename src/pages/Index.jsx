import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Datos from '../components/Datos';
import { getAllAction, getByNameAction } from '../config/citasReducer'

export default function Index() {
  const dispatch = useDispatch();

  const [Nombre, setNombre] = useState('');

  const handleChange = (event) => {
    setNombre(event.target.value);
  }

  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Identifición paciente</th>
            <th scope="col">Nombre paciente</th>
            <th scope="col">Nombre medico</th>
            <th scope="col">Fecha de cita</th>
            <th scope="col">Padecimiento</th>
            <th scope="col">Estado cita</th>
          </tr>
        </thead>
        <tbody>
          <Datos />
        </tbody>
      </table>
      <div>
        <button onClick={() => dispatch(getAllAction())} className="btn btn-primary px-5">Buscar todos</button>
        <div className="input-group mt-4">
          <button className="btn btn-primary" onClick={() => dispatch(getByNameAction(Nombre))}>
            Consultar por id paciente
          </button>
          <input type="text" className="form-control" placeholder="id del paciente"
            aria-label="Recipient's username" aria-describedby="basic-addon2"
            onChange={(e) => handleChange(e)}
            value={Nombre}
          />
          <hr />
        </div>
      </div>
    </div>
  )
}
