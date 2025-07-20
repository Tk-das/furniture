const Button = ({lable='button',myClass,onClick}) => {
    return(
        <div>
            <button onClick={onClick} className={`px-4 py-2 border rounded font-bold capitalize bg-cyan-600 text-white ${myClass}`}>{lable}</button>
        </div>
    )
}

export default Button;