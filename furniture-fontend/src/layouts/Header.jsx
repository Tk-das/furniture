import { useContext } from 'react';
import Mycontext from '../context/Mycontext.jsx';
import { MdMenu } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Button from '../components/Button.jsx';

const Header = ({user})=>{
    const { toggle,setToggle,setAuth } = useContext(Mycontext);
    const logOut = ()=>{
        localStorage.removeItem('jwtToken');
        setAuth('login');
    }
    return(
        <div className='flex justify-between items-center gap-4 px-4 py-2'>
            <div>
                <MdMenu onClick={()=>(toggle==='navbar')?setToggle(''):setToggle('navbar')} fontSize={30}/>
            </div>
            <div className='capitalize font-bold text-2xl'>tk-furniture</div>
            <div className='flex justify-center items-center gap-2'>
                <CiUser fontSize={20} className='text-purple-600 font-bold'/>
                <div className='uppercase font-bold text-purple-600'>{user.uname}</div>
                <Button onClick={logOut} lable='log-out' myClass='text-[10px] bg-red-400'/>
            </div>
        </div>
    )
}

export default Header;