import { useDispatch, useSelector } from "react-redux";
import { selectEmail, selectName, selectPassword, setEmail, setName, setPassword } from "../redux/features/auth/registerSlice";
import { useNavigate } from "react-router";
import authServices from "../services/authServices";

const Register = () => {

    const name = useSelector(selectName);
    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        // registration flow
        authServices.register({ name, email, password })
            .then((response) => {
                alert(response.data.message);

                // clear the form
                dispatch(setName(""));
                dispatch(setEmail(""));
                dispatch(setPassword(""));

                // redirect to login page
                navigate("/login");
            })
            .catch((err) => {
                alert(err.response.data.message);
            })
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 space-y-4 bg-white shadow-lg rounded-2xl">
                <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
                <form className="space-y-4"
                    onSubmit={handleRegister}
                >
                    <input type="text" placeholder="Name..." className="w-full p-3 border border-gray-300 rounded-lg"
                        value={name}
                        onChange={(e) => dispatch(setName(e.target.value))}
                    />
                    <input type="email" placeholder="Email..." className="w-full p-3 border border-gray-300 rounded-lg"
                        value={email}
                        onChange={(e) => dispatch(setEmail(e.target.value))}
                    />
                    <input type="password" placeholder="Password..." className="w-full p-3 border border-gray-300 rounded-lg"
                        value={password}
                        onChange={(e) => dispatch(setPassword(e.target.value))}
                    />
                    <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-lg">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register;