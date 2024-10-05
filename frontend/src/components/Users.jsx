import { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Users() {
    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState("")
    
    useEffect(()=>{
        const fetchUsers = async () =>{
            const response = await axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter)
            setUsers(response.data.user)
        }
        fetchUsers()
    }, [filter])

    return (
        <div>
            <div className="text-2xl font-bold py-3">Users</div>
            <input onChange={(e=>setFilter(e.target.value))} type="text" className="w-full border-2 shadow-sm text-xl" placeholder="Search Users..." />
            {users.map(user=>(<User user={user} key={user.username}/>))}
        </div>
    );
}

function User({user}) {
    const navigate = useNavigate()
    return (
        <div className="flex m-2 p-2 justify-between hover:bg-slate-200 rounded-lg">
            <div className="flex">
                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-400 dark:text-gray-300">{user.firstname[0]}</span>
                </div>
                <div className="pl-3 pt-2 text-lg">{user.firstname} {user.lastname}</div>
            </div>
            <Button onClick={(e)=>{
                navigate(`/send?id=${user._id}&name=${user.firstname}`)
            }} label={"Send Money"} />
        </div>
    )
}
export default Users;