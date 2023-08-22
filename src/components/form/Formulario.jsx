import { useState } from 'react'
import './Formulario.css'
import CampoTexto from '../Campo/CampoTexto.jsx'
import ListaOpciones from '../ListaOpciones'
import Boton from '../Boton'


const Formulario = (props) => {

    // CREAR COLABORADOR
    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")
    //CREAR EQUIPO
    const [titulo, setTitulo] = useState("")
    const [color, setColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    //Crear nuevo colaborador
    const manejarEnvio = (e) => {
        e.preventDefault()
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    //Crear nuevo equipo
    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, color: color })
    }

    return <section className='formulario'>

        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear al <span>colaborador</span></h2>
            <CampoTexto
                titulo='Nombre'
                placeholder='Ingrese nombre'
                required
                valor={nombre}
                actualizarValor={setNombre} />

            <CampoTexto
                titulo='Puesto'
                placeholder='Ingrese puesto'
                required
                valor={puesto}
                actualizarValor={setPuesto} />

            <CampoTexto
                titulo='Foto'
                placeholder='Ingrese enlace de la foto' required
                valor={foto}
                actualizarValor={setFoto} />

            <ListaOpciones
                required
                valor={equipo}
                actualizarEquipo={setEquipo}
                equipos={props.equipos} />

            <Boton texto='Crear' />
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear al <span>equipo</span></h2>
            <CampoTexto
                titulo='Titulo'
                placeholder='Ingrese Titulo'
                required
                valor={titulo}
                actualizarValor={setTitulo} />

            <CampoTexto
                titulo='Color'
                required
                valor={color}
                actualizarValor={setColor}
                type="color" />

            <Boton texto='Crear' />
        </form>

    </section>


}

export default Formulario