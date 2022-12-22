import { useState, useEffect } from "react"

import Error from "./Error"

function Formulario({pacientes, setPacientes, paciente, setPaciente}) {
    const [nombre, setNombre] = useState("")
    const [propietario, setPropietario] = useState("")
    const [email, setEmail] = useState("")
    const [alta, setAlta] = useState("")
    const [sintomas, setSintomas] = useState("")

    const [error, setError] = useState(false)

    useEffect(()=>{
        if(Object.keys(paciente).length>0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setAlta(paciente.alta)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)
        return random+fecha
    }

    const eventHandler = (e) => {
        e.preventDefault()

        if ([nombre, propietario, email, alta, sintomas].includes("")) {
            setError(true)
            return
        }

        setError(false)
        const nuevoPaciente = {
            nombre,
            propietario,
            email,
            alta,
            sintomas
        }

        if(paciente.id){
            nuevoPaciente.id=paciente.id
            const nuevosPacientes=pacientes.map((iteradorPaciente)=>{
                iteradorPaciente
                if(iteradorPaciente.id===nuevoPaciente.id){
                    return nuevoPaciente
                }else{
                    return iteradorPaciente
                }
            })
            setPacientes(nuevosPacientes)
            setPaciente({})
        }else{
            nuevoPaciente.id=generarId()
            setPacientes([...pacientes, nuevoPaciente])
        }
        

        setNombre('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')

    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5 ">
            <h2 className="font-black text-center text-2xl md:text-3xl text-gray-200">
                Seguimiento Pacientes
            </h2>
            <p className="font-bold text-xl mt-5 text-center mb-10 text-gray-200">
                Agrega Pacientes y{" "}
                <span className="text-amber-600">Administralos</span>
            </p>

            <form
                className="bg-slate-700 rounded-lg shadow-xl py-10 px-5 mb-10"
                onSubmit={eventHandler}
            >
                {error && <Error message='Todos los campos son obligatorios'/>}

                <div className="mb-5">
                    <label
                        className="block text-gray-200 uppercase font-bold"
                        htmlFor="mascota_nombre"
                    >
                        Nombre Mascota:
                    </label>
                    <input
                        id="mascota_nombre"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="w-full p-2 mt-2 text-gray-400 rounded-md bg-slate-600 outline-0"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        className="block text-gray-200 uppercase font-bold"
                        htmlFor="mascota_propietario"
                    >
                        Nombre Propietario:
                    </label>
                    <input
                        id="mascota_propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="w-full p-2 mt-2 text-gray-400 rounded-md bg-slate-600 outline-0"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        className="block text-gray-200 uppercase font-bold"
                        htmlFor="mascota_email"
                    >
                        Email Contacto:
                    </label>
                    <input
                        id="mascota_email"
                        type="text"
                        placeholder="Email de Contacto"
                        className="w-full p-2 mt-2 text-gray-400 rounded-md bg-slate-600 outline-0"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        className="block text-gray-200 uppercase font-bold"
                        htmlFor="mascota_alta"
                    >
                        Fecha de Alta:
                    </label>
                    <input
                        id="mascota_alta"
                        type="date"
                        className="w-full p-2 mt-2 text-gray-400 rounded-md bg-slate-600 outline-0"
                        value={alta}
                        onChange={(e) => setAlta(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        className="block text-gray-200 uppercase font-bold"
                        htmlFor="mascota_sintomas"
                    >
                        Sintomas:
                    </label>
                    <textarea
                        id="mascota_sintomas"
                        placeholder="Sintomas del paciente"
                        className="w-full p-2 mt-2 text-gray-400 rounded-md bg-slate-600 outline-0"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-amber-600 w-full p-3 text-gray-200 uppercase font-bold cursor-pointer
                            hover:bg-amber-700 rounded-md transition-colors"
                    value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
                />
            </form>
        </div>
    )
}

export default Formulario
