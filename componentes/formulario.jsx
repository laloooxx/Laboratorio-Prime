import React, { useState } from "react";
import { Password } from 'primereact/password';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
        



export default function FormularioPrime() {
    const [value, setValue] = useState('');
    const [user, setUser ] = useState('');

    return (
        
            <>
                <br />
                <div className="card flex justify-content-center">
                    <div className="card flex justify-content-center">
                        <span className="p-float-label">
                            <InputText id="username" value={user} onChange={(e) => setUser(e.target.value)} />
                            <label htmlFor="username">Nombre de usuario</label>
                        </span>
                    </div>
                    <br />
                    <br />
                    <div className="card flex justify-content-center">
                        <span className="p-float-label">
                            <Password value={value} onChange={(e) => setValue(e.target.value)} toggleMask />
                            <label htmlFor="password">Contraseña</label>
                        </span>
                    </div>
                    <br />
                    <div className="card flex justify-content-center">
                        <Button label="Submit" />
                    </div>
                </div>
            </>


    )
}
