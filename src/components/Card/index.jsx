import './Card.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Card = (props) => {
    const { nombre, puesto, foto, equipo, id, fav } = props.datos
    const { color, eliminar, like } = props

    //Condition ? true:false
    return <div className="colaborador">
        <AiFillCloseCircle onClick={() => eliminar(id)} className='eliminar' />
        <div className="encabezado" style={{ backgroundColor: color }}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color='red' onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} />}
        </div>
    </div>
}

export default Card