import React from 'react'
import { v4 as uuid } from 'uuid'

export const StudentItem = ({student={}}) => {
  return (
    <tr className='students-row'>
        <td className='students-data'>{ `${student.nombres.toUpperCase()} ${student.apellidos.toUpperCase()}` }</td>
        <td className='students-data'>{ `${student.tipoDoc} ${student.documento}` }</td>
        <td className='students-data'>{student.edad}</td>
        <td className='students-data'>{student.colegio}</td>
        <td className='students-data'>{student.grado}</td>
        <td className='students-data'>{student.municipio}</td>
        <td className='students-data'>{student.curso}</td>
        <td className='students-data'>{student.email}</td>
    </tr>
  )
}
