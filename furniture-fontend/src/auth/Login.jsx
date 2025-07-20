import { useState,useContext } from 'react';
import Mycontext from '../context/Mycontext.jsx';
import { SlClose } from "react-icons/sl";
import Input from '../components/Input.jsx';
import Button from '../components/Button.jsx';
import { login } from '../functions/authfun.js';

const Login = ()=>{
    const { setAuth } = useContext(Mycontext);
    const [ data,setData ] = useState({uname:'',pass:''})
    const cngLoginFun = (e)=>{
        const oldData = {...data};
        const inpName = e.target.name;
        const inpValue = e.target.value;
        oldData[inpName] = inpValue;
        setData(oldData);
    }
    const loginSubFun = (e)=>{
        e.preventDefault();
        login(data,setAuth);
    }
    return(
        <div className='bg-slate-800 w-[100%] min-h-[100vh] text-slate-300'>
            <div className='flex justify-between items-center px-4 py-1 bg-slate-900'>
                <div className='font-bold'>Login Page</div>
                <SlClose />
            </div>
            <div className='p-4 min-h-[60vh] flex justify-center items-center md:w-[70%] mx-auto'>
                <form onSubmit={loginSubFun} className='w-[100%]'>
                    <Input onChange={cngLoginFun} value={data.uname} name='uname' lable='user name' required='true'/>
                    <Input onChange={cngLoginFun} value={data.pass} name='pass' type='password' lable='password' required='true'/>
                    <div className='text-[12px] text-right py-2 text-blue-600'>Forgot my password !</div>
                    <div className='flex gap-1 font-semibold'>
                        <Input type='checkbox'/>
                        <div>Keep Remember</div>
                    </div>
                    <Button lable='Sign-in' myClass='w-[100%] my-6'/>  
                </form>
            </div>
            <div className='flex justify-center items-center gap-1'>
                <span>I have't any account yet ?</span>
                <span onClick={()=>setAuth('signup')} className='text-blue-600 font-semibold underline'>Sign-up</span>
            </div>
        </div>
    )
}

export default Login;