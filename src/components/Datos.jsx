import React from 'react'
import { useSelector } from 'react-redux'

export default function Datos() {

  const citas = useSelector(store => store.citasStore.citas.lista);

  return (

    <>
      {
        citas.map((item, index) => (
          <tr key={item.id}>
            <th scope="row">{index}</th>
            <td>{item.idPaciente}</td>
            <td>{item.nombrePaciente +" "+ item.apellidosPaciente}</td>
            <td>{item.nombreMedico +" "+ item.apellidosMedico}</td>
            <td>{item.fechaReservaCita}</td>
            <td>{item.padecimiento.nombre}</td>
            <td>{item.estadoReservaCita? "POR ATENDER" : "CANCELADA"}</td>
          </tr>
        ))
      }
    </>

  )
}
