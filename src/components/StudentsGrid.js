import React from 'react'
import { StudentItem } from './StudentItem'

export const StudentsGrid = ({students = []}) => {
  return (
    <>
        {
            students.map( student => <StudentItem student={student} key={student.id}/> )
        }
    </>
  )
}
