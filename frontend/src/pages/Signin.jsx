import { useState } from "react";
import { Heading, SubHeading, InputBox, Button, BottomWarning } from "../components";
import axios from "axios";

function Signin() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className=" flex justify-center items-center h-screen bg-gray-300">
            <div className="flex flex-col justify-center shadow-md p-10 rounded-md bg-white">
                <Heading label={"Sign In"} />
                <SubHeading label={"Enter your credentials to access your account"} />
                <InputBox onChange={(e=>setUsername(e.target.value))} label={"Username"} type={"Text"} placeholder={"bill@gmail.com"} />
                <InputBox onChange={(e=>setPassword(e.target.value))} label={"Password"} type={"password"} />
                <Button onClick={async (e)=>{
                    const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                        username,
                        password
                    })
                    localStorage.setItem("token", response.data.token)
                }} label={"Sign In"} />
                <BottomWarning label={"Don't have an Account?"} to={"/signup"} linkText={"Sign up"} />
            </div>
        </div>

    );
}

export default Signin;