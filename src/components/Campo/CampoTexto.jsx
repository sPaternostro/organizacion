import { useState } from 'react'
import './Campo.css'

const CampoTexto = (props) => { 

    //Input controlado ( value={valor} )
    
    const placerholderMod = `${props.placeholder}...`
    // al poner type = 'text' le damos ese valor por default
    const { type = "text" } = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }


    return <div className={`campo campo-${type}`}>
        <label>{ props.titulo }</label>
        <input
         placeholder={placerholderMod} 
         required={props.required} 
         value={props.valor}
         onChange={manejarCambio}
         type={type}
         />
    </div>
}

export default CampoTexto