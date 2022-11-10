import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/'}>Factumex</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item ">
                                <Link className="nav-link" to={'/'}>Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/login'}>Ingresar</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/employees'}>Employees</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar