import { useContext } from 'react';
import Mycontext from '../context/Mycontext.jsx';
import { SlClose } from "react-icons/sl";

const Navbar = ()=>{
    const { toggle,setToggle } = useContext(Mycontext);
    return(
        <div className={`${toggle==='navbar'?'':'hidden'} absolute min-w-[200px] min-h-[90vh] left-0 top-0 bg-slate-800 text-white`}>
            <div className='flex justify-between items-center p-2 capitalize font-bold'>
                <h2>navbar</h2>
                <SlClose onClick={()=>setToggle('')} />
            </div>
            <div className='p-2'>
                <Item lable='bill' linkName='bill'/>
                <Item />
            </div>
        </div>
    )
}

export default Navbar;

const Item = ({lable='list 1',linkName})=>{
    const { setToggle } = useContext(Mycontext);
    return(
        <div>
            <div onClick={()=>setToggle(linkName)} className='border rounded px-4 py-1 capitalize mb-2'>{lable}</div>
        </div>
    )
}
