import React from "react";
import { Link } from "react-router-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';


export interface LoginPageProps { };

const LoginPage: React.FC<LoginPageProps> = props => {
    return <>
        <div className="container">
            <div className="card p-5 gap-2 col-6 d-grid mx-auto">
                <Link to={'/'}>Volver</Link>
                <h1>Iniciar sesión</h1>

                <form>
                    <div className="mb-3">
                        <label className="form-label">Correo electrónico</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 d-grip gap-2 col-12 mx-auto">
                        <label className="form-label">Contraseña</label>
                        <input type="password" className="form-control mb-3" id="exampleInputPassword1" />
                        <Link to={'/'} className="link">¿Olvidaste tu contraseña?</Link>
                    </div>
                    <button type="submit" className="btn btn-danger col-12">Ingresar</button>
                </form>
            </div>
        </div>
    </>
}

export default LoginPage