import { type } from 'os';
import React, { useEffect, useState } from 'react';
import FormData from './FormData';
import { SearchBarComponent } from './SearchBarComponent';


interface user {
    map(arg0: (item: any) => JSX.Element): import('react').ReactNode;
    id: string;
    name: string;
    last_name: string;
    birthday: string;
}

const Employees: React.FC = () => {


    const [user, setUser] = useState<user | undefined>();

    useEffect(() => {
        fetch('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:cesar_silva')
            .then((response) => response.json())
            .then((json) => setUser(json.data.employees));
    }, []);

    return (<>
        <div className="container">
            {/* <SearchBarComponent /> */}
            <FormData />
            <div className="p-2">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Fecha de nacimiento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user?.map((item) => (
                            <tr>
                                <th scope="row" key={item.toString()}>{item?.id}</th>
                                <td>{item?.last_name}</td>
                                <td>{item?.name}</td>
                                <td>{item?.birthday}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
    )
}

export default Employees