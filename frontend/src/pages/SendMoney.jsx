import { useNavigate, useSearchParams } from "react-router-dom";
import { InputBox } from "../components";
import { useState } from "react";
import axios from "axios";

function SendMoney() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [amount, setAmount] = useState(0)
    const id = searchParams.get("id")
    const name = searchParams.get("name")
    return (
        <div className="flex justify-center items-center h-screen bg-gray-300">
            <div className=" shadow-md p-6 bg-white">
                <div className="text-3xl font-bold p-10">
                    Send Money
                </div>
                <div>
                    <div className="flex pb-3">
                        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <span className="font-medium text-gray-400 dark:text-gray-300">{name[0].toUpperCase()}</span>
                        </div>
                        <div className="pl-3 pt-2 text-lg">{name}</div>
                    </div>
                    <InputBox label={"Amount (in Rs)"} placeholder={"Enter Amount"} type={"text"} onChange={e=>setAmount(e.target.value)} />
                    <button type="button" onClick={async (e)=>{
                        await axios.post("http://localhost:3000/api/v1/account/transfer",{
                            to: id,
                            amount
                        }, {
                            headers: {
                                Authorization: "Bearer "+ localStorage.getItem("token")
                            }
                        }).then(()=>{
                            alert("Success")
                            navigate("/dashboard")
                            
                        }).catch((error)=>{
                            console.log(error);
                        })
                    }} class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full">Initiate Transfer </button>
                </div>
            </div>
        </div>
    );
}

export default SendMoney;