import {Link} from "react-router-dom"

function BottomWarning({label, to, linkText}) {
    return ( 
        <div className=" text-center flex justify-center">
            <div className="pr-3">{label}</div>
            <Link to={to} className=" underline">{linkText}</Link>
        </div> 
    );
}

export default BottomWarning;