function Error({message}) {
    return (
        <div className="p-3 text-gray-200 font-bold uppercase bg-red-500 mb-5 rounded-md text-center">
            <p>{message}</p>
        </div>
    )
}

export default Error;
