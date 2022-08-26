import React, { useEffect, useState } from 'react'
import { getItems } from '../application/api';
import { Courses } from './Courses';
import { StudentsGrid } from './StudentsGrid';

export const TableStudents = () => {
    const [loading, setLoading] = useState(true);
    const [students, setStudents] = useState([]);
    const [aux, setAux] = useState([]);
    const [count, setCount] = useState(0);

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
                <Courses
                    diseño={students.filter(e => e.curso === 'Diseño de una nueva realidad').length}
                    business={students.filter(e => e.curso === 'Building your future business').length}
                    programacion={students.filter(e => e.curso === 'Programando el futuro').length}
                />
            </div>

            <div className="students-container">
                <div className="filters">
                    <div className="filters-control">
                        <label htmlFor="curso" className="filters-label">Curso: </label>
                        <select name="curso" id="curso" className="filters-select"
                            onChange={(e) => {

                                if (e.target.value === '-- Filtrar por curso --') {
                                    setStudents(aux);
                                    console.log('default');
                                } else {
                                    let newArr = [];
                                    if (count != 0) {
                                        newArr = aux.filter((s) => {
                                            return s.curso === e.target.value;
                                        });
                                    } else {
                                        setAux(students);
                                        newArr = students.filter((s) => {
                                            return s.curso === e.target.value;
                                        });

                                    }

                                    setStudents(newArr);
                                }

                                setCount(count + 1);
                            }}>
                            <option value="0"> -- Filtrar por curso -- </option>
                            <option value="Diseño de una nueva realidad">Diseño de una nueva realidad</option>
                            <option value="Building your future business">Building your future business</option>
                            <option value="Programando el futuro">Programando el futuro</option>
                        </select>
                    </div>
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
            </div>

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
