import React from "react";
import Cards from "../../components/Cards";

export interface HomePageProps { };

const HomePage: React.FC<HomePageProps> = props => {
    return <div className="container d-grid gap-2 col-6 mx-auto">
        <div className="row">
            <h1>Bienvenido</h1>
            <p>¿Qué deseas hacer?</p>
            <div className="col-12">
                <Cards />
            </div>
        </div>
    </div>
}

export default HomePage