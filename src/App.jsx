import { useState, useEffect} from "react"

import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import Eliminar from "./components/Eliminar"

function App() {

    const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])
    const [paciente, setPaciente] = useState({})

    const [modalEliminar, setModalEliminar] = useState(false)
    const [idPacienteEliminar, setIdPacienteEliminar] = useState('')

    useEffect(()=>{
        localStorage.setItem('pacientes', JSON.stringify(pacientes))
    }, [pacientes])

    const modalEliminarPaciente = id =>{
        setIdPacienteEliminar(id)
        const body=document.querySelector('BODY')
        body.classList.add('overflow-hidden')
        setModalEliminar(true)
    }
    
    return (
        <div>
            {
                modalEliminar && 
                <Eliminar 
                    setModalEliminar={setModalEliminar} 
                    pacientes={pacientes} 
                    setPacientes={setPacientes}
                    idPacienteEliminar={idPacienteEliminar}
                    setIdPacienteEliminar={setIdPacienteEliminar}
                />
            }
            <Header />
            <div className="mt-20 flex flex-col md:flex-row container mx-auto">
                <Formulario 
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    paciente={paciente}
                    setPaciente={setPaciente}
                />
                <ListadoPacientes 
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                    modalEliminarPaciente={modalEliminarPaciente}
                />
            </div>
            
        </div>
    )

}

export default App
