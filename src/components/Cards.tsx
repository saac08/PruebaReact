import React from 'react'
import { Link } from 'react-router-dom'

const Cards = () => {
    return (
        <>
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">Ingresar</h5>
                    <p className="card-text">Tener una cuenta te permite poder interactuar con la web de una forma más especifica e ilimitada.</p>
                    <Link to={'/login'} className="card-link">Iniciar sesion</Link>
                    <Link to={'/'} className="card-link">Registrarse</Link>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Ver lista de empleados</h5>
                    <p className="card-text">Registra, visualiza y busca empleados.</p>
                    <Link to={'/employees'} className="card-link">Ver lista</Link>
                </div>
            </div>
        </>
    )
}

export default Cards
