import { useState } from "react";
import { BottomWarning, Button, Heading, InputBox, SubHeading } from "../components";
import axios from "axios"
import { useNavigate } from "react-router-dom";
function Signup() {
    const navigate = useNavigate()
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return ( 
        <div className="flex justify-center items-center h-screen bg-gray-300">
            <div className="flex flex-col justify-between shadow-lg p-4 bg-white">
                <Heading label={"Sign Up"}/>
                <SubHeading label={"Enter your information to create an account"}/>
                <InputBox onChange={e=>setFirstname(e.target.value)} label={"First Name"} type={"Text"} placeholder={"Bill"}/>
                <InputBox onChange={e=>setLastname(e.target.value)} label={"Last Name"} type={"Text"} placeholder={"Gates"}/>
                <InputBox onChange={e=>setUsername(e.target.value)} label={"Username"} type={"Text"} placeholder={"bill@gmail.com"}/>
                <InputBox onChange={e=>setPassword(e.target.value)} label={"Password"} type={"password"} />
                <Button onClick={async ()=>{
                    const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                            username,
                            firstname,
                            lastname,
                            password
                    })
                    localStorage.setItem("token", response.data.token)
                    navigate("/dashboard")
                }} label={"Sign Up"}/>
                <BottomWarning label={"Already have an Account?"} to={"/signin"} linkText={"Sign in"}/>
            </div>
        </div> 
    );
}

export default Signup;