import './Equipo.css'
import Card from '../Card'
import hexToRgba from 'hex-to-rgba';


const Equipo = (props) => {

    //Destructuracion
    const { color, bg, titulo, id } = props.datos
    const title = { borderColor: color }
    const bgColor = { backgroundColor: hexToRgba(color, 0.6) }
    const { colaboradores, eliminar, actualizarColor, like } = props


    return <>
        {colaboradores.length > 0 &&
            <section className='equipo' style={bgColor}>
                <input 
                id='style'
                type='color'
                className='inputColor'
                value={hexToRgba(color, 0.6)}
                onChange={(e) => {
                    actualizarColor(e.target.value, id)
                }}
                />
                <h3 style={title}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Card
                            datos={colaborador}
                            key={index}
                            color={color}
                            eliminar={eliminar}
                            like={like} />)
                    }
                </div>
            </section>
        }
    </>
}



export default Equipo