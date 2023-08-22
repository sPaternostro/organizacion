import './MiOrg.css'
import addImg from '../../img/add.png'
// import { useState } from 'react'


const MiOrg = (props) => {

    // Hooks! -> useState
    //const [variable, actualizarVariable] = useState(valorInicial)

    // const [mostrar, actualizarMostrar] = useState(true)

    // const manejarClick = () => {
    //     actualizarMostrar(!mostrar)
    // }

    return <section className='orgSection'>
        <h3 className='title'>Mi Organizacion</h3>
        <img src={addImg} alt="add icon" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg