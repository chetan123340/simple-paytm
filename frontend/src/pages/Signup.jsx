import { BottomWarning, Button, Heading, InputBox, SubHeading } from "../components";

function Signup() {
    return ( 
        <div className="flex justify-center items-center h-screen ">
            <div className="flex flex-col justify-between shadow-lg p-4">
                <Heading label={"Sign Up"}/>
                <SubHeading label={"Enter your information to create an account"}/>
                <InputBox label={"First Name"} type={"Text"} placeholder={"Bill"}/>
                <InputBox label={"Last Name"} type={"Text"} placeholder={"Gates"}/>
                <InputBox label={"Username"} type={"Text"} placeholder={"bill@gmail.com"}/>
                <InputBox label={"Password"} type={"password"} />
                <Button label={"Sign Up"}/>
                <BottomWarning label={"Already have an Account?"} to={"/signin"} linkText={"Sign in"}/>
            </div>
        </div> 
    );
}

export default Signup;