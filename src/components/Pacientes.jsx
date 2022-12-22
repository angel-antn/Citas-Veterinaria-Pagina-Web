function Pacientes({ paciente, setPaciente, eliminarPaciente}) {
    const { nombre, propietario, email, alta, sintomas, id } = paciente;

    const handleEliminar = () => {
        const respuesta = confirm("¿Estas seguro de que quieres eliminar este paciente?")
        if(respuesta){
            eliminarPaciente(id)
        }
    }

    return (
        <div className="bg-slate-700 shadow-xl px-5 pt-10 pb-6 rounded-lg mb-5">
            <p className="font-bold mb-3 text-gray-200 uppercase">
                Nombre mascota:{" "}
                <span className=" font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-200 uppercase">
                Nombre propietario:{" "}
                <span className=" font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-200 uppercase">
                email contacto:{" "}
                <span className=" font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-200 uppercase">
                Fecha de alta:{" "}
                <span className=" font-normal normal-case">{alta}</span>
            </p>
            <p className="font-bold mb-3 text-gray-200 uppercase">
                Sintomas:{" "}
                <span className=" font-normal normal-case">{sintomas}</span>
            </p>
            <div className="flex flex-col md:flex-row md:justify-evenly items-center">
                <button
                    type="button"
                    className="py-3 bg-amber-600 hover:bg-amber-700 text-gray-200 font-bold
                    uppercase rounded-md mt-5 transition-colors md:w-1/3 sm:w-3/5 w-full"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="py-3 bg-red-500 hover:bg-red-600 text-gray-200 font-bold
                    uppercase rounded-md mt-5 transition-colors w-100 md:w-1/3 sm:w-3/5 w-full"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default Pacientes;
