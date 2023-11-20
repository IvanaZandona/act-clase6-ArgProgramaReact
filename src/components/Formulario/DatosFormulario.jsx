import React from 'react';
import "./DatosFormulario.css"

const DatosFormulario = () => {

    return (
        <>
            <div className='ventana'>
                <p>Enviado</p>
                {/* La intención real de esto era mostrar los valores ingresados en los inputs del registro, 
                si faltase completar uno o estuviese mal escrito, se vería, pero no supe resolverlo. 
                Así que use la función solo para mostrar la confirmación del envío. Como no muestra dichos valores 
                del formulario, faltaría perfeccionar que no aparezca "enviado" si el formulario esta vacío  */}
            </div><br />
        </>
    );
}

export default DatosFormulario;
