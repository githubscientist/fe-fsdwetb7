import { useLoaderData, useNavigate } from "react-router";

const Dashboard = () => {

    const user = useLoaderData();
    const navigate = useNavigate();

    console.log(user);

    const handleLogout = async () => {
        navigate("/logout");
    }

    return (
        <div>
            <p>Welcome {user.user.name}! <button className="btn btn-primary"
                onClick={handleLogout}
            >Logout</button></p>
        </div>
    )
}

export default Dashboard;