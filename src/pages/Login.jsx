import { useDispatch, useSelector } from "react-redux";
import { selectEmail, selectPassword, setEmail, setPassword } from "../redux/features/auth/loginSlice";
import authServices from "../services/authServices";
import { useNavigate } from "react-router";

const Login = () => {

    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // login flow
        authServices.login({ email, password })
            .then((response) => {
                alert(response.data.message);

                // clear the form
                dispatch(setEmail(""));
                dispatch(setPassword(""));

                // redirect to dashboard
                navigate("/dashboard");
            })
            .catch((error) => {
                alert(error.response.data.message);
            })
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 space-y-4 bg-white shadow-lg rounded-2xl">
                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
                <form className="space-y-4"
                    onSubmit={handleLogin}
                >
                    <input type="email" placeholder="Email..." className="w-full p-3 border border-gray-300 rounded-lg"
                        value={email}
                        onChange={(e) => dispatch(setEmail(e.target.value))}
                    />
                    <input type="password" placeholder="Password..." className="w-full p-3 border border-gray-300 rounded-lg"
                        value={password}
                        onChange={(e) => dispatch(setPassword(e.target.value))}
                    />
                    <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-lg">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;