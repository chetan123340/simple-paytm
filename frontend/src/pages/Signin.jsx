import { Heading, SubHeading, InputBox, Button, BottomWarning } from "../components";

function Signin() {
    return ( 
        <div className=" flex justify-center items-center h-screen">
            <div className="flex flex-col justify-center shadow-md p-4">
            <Heading label={"Sign In"}/>
            <SubHeading label={"Enter your credentials to access your account"}/>
            <InputBox label={"Username"} type={"Text"} placeholder={"bill@gmail.com"}/>
            <InputBox label={"Password"} type={"password"} />
            <Button label={"Sign In"}/>
            <BottomWarning label={"Don't have an Account?"} to={"/signup"} linkText={"Sign up"}/>
            </div>
        </div>
     );
}

export default Signin;