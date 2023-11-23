import React from 'react';
import { useState } from 'react';
import DatosFormulario from './DatosFormulario';
import "./Formulario.css"

const Formulario = () => {

    const handleSubmitR = (e) => {
        e.preventDefault();
        console.log(`Nombre: ${nombreR} - Apellido: ${apellidoR} - Email: ${emailR} - Teléfono ${telefonoR} - Contraseña ${contraseniaR} - Repetición contraseña: ${contraseniaRR}`);
    }
    const [nombreR, setNombreR] = useState("");
    const [apellidoR, setApellidoR] = useState("");
    const [emailR, setEmailR] = useState("");
    const [telefonoR, setTelefonoR] = useState("");
    const [contraseniaR, setContraseniaR] = useState("");
    const [contraseniaRR, setContraseniaRR] = useState("");
    const handleNombreR = (e) => setNombreR(e.target.value);
    const handleApellidoR = (e) => setApellidoR(e.target.value);
    const handleEmailR = (e) => setEmailR(e.target.value);
    const handleTelefonoR = (e) => setTelefonoR(e.target.value);
    const handleContraseniaR = (e) => setContraseniaR(e.target.value);
    const handleContraseniaRR = (e) => setContraseniaRR(e.target.value);

    const [datosForm, setDatosForm] = useState(false)
    const mostrarDatosFormulario = () => {
        if (datosForm === true) {
            setDatosForm(false)
        } else {
            setDatosForm(true)
        }
    }

    const borrar = (e) => {
        e.preventDefault()
        setNombreR('');
        setApellidoR('');
        setEmailR('');
        setTelefonoR('');
        setContraseniaR('');
        setContraseniaRR('');
        setDatosForm(false);
    }

    return (
        <>
            <div className='containerForm'>
                <form action="" onSubmit={handleSubmitR}>

                    <h2>Registrarse</h2>

                    <label htmlFor="nombreR" name="nombreR" >Nombre/s</label><br />
                    <input type="text" name="nombreR" id="nombreR" placeholder='Nombre/s' value={nombreR} onChange={handleNombreR} required /><br />

                    <label htmlFor="apellidoR" name="apellidoR" >Apellido/s</label><br />
                    <input type="text" name='apellidoR' id='apellidoR' placeholder='Apellido/s' value={apellidoR} onChange={handleApellidoR} required /><br />

                    <label htmlFor="emailR" name="emailR">Email</label><br />
                    <input type="email" name='emailR' id='emailR' placeholder='example@email.com' value={emailR} onChange={handleEmailR} required /><br />

                    <label htmlFor="telefonoR" name="telefonoR" >Teléfono</label><br />
                    <input type="number" name='telefonoR' id='telefonoR' placeholder='(área) xxx xxxxxx' value={telefonoR} onChange={handleTelefonoR} required /><br />

                    <label htmlFor="passwordR" name="passwordR" >Contraseña</label><br />
                    <input type="password" name='passwordR' id='passwordR' placeholder='(mínimo 8 dígitos)' value={contraseniaR} onChange={handleContraseniaR} required /><br />

                    <label htmlFor="passwordR2" name="passwordR2" >Confirmar contraseña</label><br />
                    <input type="password" name='passwordR2' id='passwordR2' placeholder='' value={contraseniaRR} onChange={handleContraseniaRR} required /><br ></br>

                    <button type='submit' onClick={mostrarDatosFormulario} id='buttonSubmit' className='button'>Enviar</button><br /><br />
                    <button type='reset' onClick={borrar} className='button'>Restablecer</button>

                </form>

            </div>

            {datosForm ? <DatosFormulario nombreR={nombreR} apellidoR={apellidoR} emailR={emailR} telefonoR={telefonoR} contraseniaR={contraseniaR} contraseniaRR={contraseniaRR} /> : ""}

        </>
    );
}

export default Formulario;
