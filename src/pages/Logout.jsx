import { useEffect } from "react";
import authServices from "../services/authServices";
import { useNavigate } from "react-router";

const Logout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        authServices.logout()
            .then((response) => {
                alert(response.data.message);

                setTimeout(() => {
                    navigate("/login");
                }, 1000);
            })
            .catch((error) => {
                alert(error.response.data.message);
            })
    }, []);

    return (
        <div>Logging out...</div>
    )
}

export default Logout;