const Input = ({lable,type='text',myClass,value,name,id,onChange,step='0.01',required=false})=>{
    return(
        <div className='flex flex-col gap-1 mb-2'>
            <label className='font-semibold capitalize'>{lable}</label>
            <input onChange={onChange} type={type} id={id} name={name} value={value} required={required} step={step} className={`outline-none px-2 py-1 border rounded w-[100%] ${myClass}`}/>
        </div>
    )
}

export default Input;