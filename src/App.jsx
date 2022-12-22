import { useState, useEffect} from "react"

import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

    const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])
    const [paciente, setPaciente] = useState({})

    useEffect(()=>{
        localStorage.setItem('pacientes', JSON.stringify(pacientes))
    }, [pacientes])

    const eliminarPaciente = id =>{
        const nuevosPacientes = pacientes.filter((iteradorPaciente)=>iteradorPaciente.id!==id)
        setPacientes(nuevosPacientes)
    }
    
    return (
        <div>
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
                    eliminarPaciente={eliminarPaciente}
                />
            </div>
            
        </div>
    )

}

export default App
