import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/header/header.jsx';
import Formulario from './components/form/Formulario.jsx';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';


function App() {

  const [mostrarForm, actualizarForm] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([])
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo: 'Programacion',
      color: '#57C278',
      bg: '#D9F7E9',
      fav: false
    },
    {
      id: uuidv4(),
      titulo: 'FrontEnd',
      color: '#82CFFA',
      bg: '#E8F8FF',
      fav: false
    },
    {
      id: uuidv4(),
      titulo: 'DataScience',
      color: '#A6D157',
      bg: '#F0F8E2',
      fav: false
    },
    {
      id: uuidv4(),
      titulo: 'DevOps',
      color: '#E06B69',
      bg: '#FDE7E8',
      fav: false
    },
    {
      id: uuidv4(),
      titulo: 'UX/UI',
      color: '#DB6EBF',
      bg: '#FAE9F5',
      fav: false
    },
    {
      id: uuidv4(),
      titulo: 'Mobile',
      color: '#FFBA05',
      bg: '#FFF5D9',
      fav: false
    },
    {
      id: uuidv4(),
      titulo: 'Innovacion&Gestion',
      color: '#FF8A29',
      bg: '#FFEEDF',
      fav: false
    }
  ])

  //Ternario: condition ? ifTrue:ifFalse
  // 'cortocircuito': condicion && ifTrue
  // { mostrarForm && <Formulario />  }

  //MOSTRAR/OCULTAR FORM
  const cambiarMostrar = () => {
    actualizarForm(!mostrarForm)
  }

  //REGISTRAR COLABORADOR
  const registrar = (colaborador) => {

    //Spread operator (copia el valor del array)
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //ELIMINAR COLABORADOR

  const eliminar = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //ACTUALIZAR COLOR DE EQUIPO

  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.color = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //CREAR EQUIPO

  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuidv4() }])
  }

  // LIKE

  const like = (id) => {
    const colaboradorActualizado = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradorActualizado)
  }


  //Siempre que usamos el metodo map, hay que darle una key unica!

  return (
    <div>
      <Header />

      {
        mostrarForm && <Formulario equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrar}
          crearEquipo={crearEquipo}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) =>
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo.includes(equipo.titulo))}
          eliminar={eliminar}
          actualizarColor={actualizarColor}
          like={like} />
      )}

      <Footer />

    </div>
  );
}

export default App;