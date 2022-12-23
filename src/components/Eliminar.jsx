function Eliminar({setModalEliminar, pacientes, setPacientes, idPacienteEliminar, setIdPacienteEliminar}) {

    const handleExit = () =>{
        setModalEliminar(false)
        const body = document.querySelector('BODY')
        body.classList.remove('overflow-hidden')
    }

    const handleEliminar = () =>{
        const nuevosPacientes = pacientes.filter((iteradorPaciente)=>iteradorPaciente.id!==idPacienteEliminar)
        setPacientes(nuevosPacientes)
        setIdPacienteEliminar('')
        handleExit()
    }

    return (
        <div className="bg-gray-900/90 h-full w-full fixed flex items-center 
        justify-center top-0 bottom-0 left-0 right-0 z-10"
        onClick={handleExit}>
            <div className="bg-slate-700 rounded-md shadow-lg p-10 mx-5">

                <h2 className="font-black text-center text-2xl md:text-3xl text-gray-200">
                        Eliminar Paciente
                </h2>
                <p className="font-bold text-xl mt-5 text-center mb-3 text-gray-200">
                    ¿Estas seguro de que quieres eliminar este paciente{" "}
                    <span className="text-amber-600">Permanentemente</span>
                    ?
                </p>
                
                <div className="flex flex-col md:flex-row md:justify-evenly items-center">
                    <button
                        type="button"
                        className="py-3 bg-red-500 hover:bg-red-600 text-gray-200 font-bold
                        uppercase rounded-md mt-5 transition-colors w-100 md:w-1/3 sm:w-3/5 w-full"
                        onClick={handleEliminar}
                    >
                        Eliminar
                    </button>
                    <button
                        type="button"
                        className="py-3 bg-amber-600 hover:bg-amber-700 text-gray-200 font-bold
                        uppercase rounded-md mt-5 transition-colors md:w-1/3 sm:w-3/5 w-full"
                        onClick={handleExit}
                    >
                        Volver
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Eliminar