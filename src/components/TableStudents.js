import React, { useEffect, useState } from 'react'
import { getItems } from '../application/api';
import { Courses } from './Courses';
import { StudentsGrid } from './StudentsGrid';

export const TableStudents = () => {
    const [loading, setLoading] = useState(true);
    const [students, setStudents] = useState([]);
    // const [filters, setFilters] = useState(false);

    useEffect(() => {
        getInformation();
        setLoading(false);
    }, []);


    const getInformation = async () => {
        const i = await getItems();
        setStudents(i);
    }

    return (
        <>
            <div className="courses">
                {/* <button className="filters-button" onClick={() => setFilters(true)}>Filtros</button> */}


                <Courses
                    diseño={students.filter(e => e.curso === 'Diseño de una nueva realidad').length}
                    business={students.filter(e => e.curso === 'Building your future business').length}
                    programacion={students.filter(e => e.curso === 'Programando el futuro').length}
                />
            </div>

            <table className='students'>
                <thead>
                    <tr className='students-head'>
                        <th className="students-head-title">Nombre completo</th>
                        <th className="students-head-title">Documento</th>
                        <th className="students-head-title">Edad</th>
                        <th className="students-head-title">Colegio</th>
                        <th className="students-head-title">Grado</th>
                        <th className="students-head-title">Municipio</th>
                        <th className="students-head-title">Curso</th>
                        <th className="students-head-title">E-mail</th>
                    </tr>
                </thead>

                <tbody>
                    {loading === true ? console.log('Cargando') : <StudentsGrid students={students} />}
                </tbody>

            </table>

            {/* {
                filters &&
                <div className='filters'>
                    <div className="filters-modal">
                        <div className="filters-action">
                            <button className="filters-action-close" onClick={() => setFilters(false)}>X</button>

                            <div className="filters-option">
                                <select name="" id="">
                                    <option value="todos">Todos</option>
                                    {
                                        loading &&
                                        [...new Set(students.map(e => e.curso))].map((curso) => {
                                            <option value={curso.toLowerCase()}>{curso}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            } */}
        </>
    )
}
