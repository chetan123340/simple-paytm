function InputBox({type, label, placeholder, onChange}) {
    return ( <div className=" pb-3">
        <div className=" font-bold w-full p-2" >{label}</div>
        <input type={type} onChange={onChange} placeholder={placeholder} className="w-full h-9 pl-4 rounded-md text-lg shadow-md"  />
    </div> );
}

export default InputBox;