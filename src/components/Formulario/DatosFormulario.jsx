import React from 'react';
import "./DatosFormulario.css"

const DatosFormulario = ({nombreR, apellidoR, emailR, telefonoR, contraseniaR, contraseniaRR}) => {

    return (
        <>
        <h3>Revise sus datos enviados:</h3>
            <div className='ventana'>
                <p><strong>Nombre:</strong> {nombreR}</p>
                <p><strong>Apellido:</strong> {apellidoR}</p>
                <p><strong>Email:</strong> {emailR}</p>  
                <p><strong>Telefono:</strong> {telefonoR}</p>
                <p><strong>Contraseña:</strong> {contraseniaR}</p>
                <p><strong>Repetición contraseña:</strong> {contraseniaRR} </p>
            </div><br />
        </>
    );
}

export default DatosFormulario;
