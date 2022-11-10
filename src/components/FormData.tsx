import React, { useState } from 'react'

const FormData: React.FC = () => {

    const [nameEmployeed, setNameEmployeed] = useState('');
    const [lastNameEmployeed, setLastNameEmployeed] = useState('');
    const [birthdayEmployeed, setBirthdayEmployeed] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const employeed = { nameEmployeed, lastNameEmployeed, birthdayEmployeed };

        const URL = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:cesar_silva';

        fetch(URL, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(employeed)
        }).then(() => {
            console.log('Nuevo usuario registrado')
        })
    }

    return (
        <div className="container p-3">
            <h1>Registrar usuarios</h1>
            <form className="row gy-2 gx-3 align-items-center mb-3" onSubmit={handleSubmit}>
                <div className="col-4 mb-3">
                    <label className="visually">Nombres</label>
                    <input
                        value={nameEmployeed}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setNameEmployeed(e.target.value)}
                        type="text"
                        className="form-control"
                        id="autoSizingInput nameEmployeed"
                        placeholder="Luis Fernando" />
                </div>
                <div className="col-4 mb-3">
                    <label className="visually" >Apellidos</label>0
                    <input
                        value={lastNameEmployeed}
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setLastNameEmployeed(e.target.value)}
                        type="text"
                        className="form-control"
                        id="autoSizingInput lastNameInput"
                        placeholder="Ortíz Herrera" />
                </div>
                <div className="col-4 mb-3">
                    <div className="col-auto">
                        <label className="visually">Fecha de nacimiento</label>
                        <input
                            value={birthdayEmployeed}
                            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setBirthdayEmployeed(e.target.value)}
                            type="date"
                            className="form-control"
                            id="autoSizingInput dateInput" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
    )
}

export default FormData
