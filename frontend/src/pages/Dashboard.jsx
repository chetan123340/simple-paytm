import axios from "axios";
import { Appbar, Balance, Users } from "../components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Dashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [balance, setBalance] = useState(0)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/user/me", {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                });
                setUser(response.data);  // Set the user state with the fetched data

                const balResponse = await axios.get("http://localhost:3000/api/v1/account/balance", {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                });
                setBalance(balResponse.data.balance)
            } catch (error) {
                console.error("Error fetching user:", error);
                navigate("/signin");  // Redirect if there's an error (like an invalid token)
            }
        };

        fetchUser();  // Execute the async function
    }, [navigate]);  // Ensure navigate is included in the dependency array

    // Check if user is undefined or empty and handle navigation to sign-in
    if (!user || Object.keys(user).length === 0) {
        return null;  // Optionally show a loading state here
    }

    return (
        <div>
            <Appbar letter={user.firstname?.[0].toUpperCase()} name={user.firstname} />
            <div className="px-10 py-6">
                <Balance balance={balance} />
                <Users />
            </div>
        </div>
    );
}

export default Dashboard;
