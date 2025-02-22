const Register = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 space-y-4 bg-white shadow-lg rounded-2xl">
                <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
                <form className="space-y-4">
                    <input type="text" placeholder="Name..." className="w-full p-3 border border-gray-300 rounded-lg" />
                    <input type="email" placeholder="Email..." className="w-full p-3 border border-gray-300 rounded-lg" />
                    <input type="password" placeholder="Password..." className="w-full p-3 border border-gray-300 rounded-lg" />
                    <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-lg">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register;