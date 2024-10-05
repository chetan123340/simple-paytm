import { useNavigate } from "react-router-dom";

function Appbar({letter, name}) {
    const navigate = useNavigate()
    return (
        <div className="">
            <div className="border-gray-500 border-solid border-b-2">
                <div className="flex justify-between p-4">
                    <div className=" text-2xl">Transaction App</div>
                    <div className="flex">
                        <div className="p-3">Hello {name}</div>
                        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <span className="font-medium text-gray-600 dark:text-gray-300">{letter}</span>
                        </div>
                        <button type="button" onClick={(e)=>{
                            localStorage.removeItem("token")
                            navigate("/signin")
                        }} class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ml-2">LogOut</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Appbar;