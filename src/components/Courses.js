import React from 'react'

export const Courses = ({diseño, business, programacion}) => {

    return (
        <>
            <div className="course-design">
                <div className="course-text-design">
                    <h3 className='course-title'>Diseño de una nueva realidad</h3>
                    <h1>{diseño}</h1>
                </div>
            </div>

            <div className="course-business">
                <div className="course-text-business">
                    <h3 className='course-title'>Building your future business</h3>
                    <h1>{business}</h1>
                </div>
            </div>

            <div className="course-soft">
                <div className="course-text-soft">
                    <h3 className='course-title'>Programando el futuro</h3>
                    <h1>{programacion}</h1>
                </div>
            </div>
        </>
    )
}
