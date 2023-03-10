import Pacientes from "./Pacientes"

function ListadoPacientes({pacientes, setPaciente, modalEliminarPaciente}) {
    return (
        <div className="md:h-screen md:w-1/2 lg:w-3/5 mx-5">
            {
                pacientes && pacientes.length ? 
                <>
                    <h2 className="font-black text-center text-2xl md:text-3xl text-gray-200">
                    Listado pacientes
                    </h2>
                    <p className="font-bold text-xl mt-5 text-center mb-10 text-gray-200">
                        Administra tus{" "}
                        <span className="text-amber-600">Pacientes y Citas</span>
                    </p>
                    <div className="md:h-screen md:overflow-y-scroll">
                        {
                            pacientes.map(paciente =>
                                <Pacientes
                                    key={paciente.id}
                                    paciente={paciente}
                                    setPaciente={setPaciente}
                                    modalEliminarPaciente={modalEliminarPaciente}
                                />
                            )
                        }
                        
                    </div>
                </>
                :
                <>
                    <h2 className="font-black text-center text-2xl md:text-3xl text-gray-200">
                    No Hay Pacientes
                    </h2>
                    <p className="font-bold text-xl mt-5 text-center mb-10 text-gray-200">
                        Comienza Agregando Pacientes y{" "}
                        <span className="text-amber-600">Apareceran en este Lugar</span>
                    </p>
                </>
            }
            
        </div>
    )
}

export default ListadoPacientes
