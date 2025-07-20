import { useState,useContext } from 'react';
import Mycontext from '../context/Mycontext.jsx';
import { SlClose } from "react-icons/sl";
import Input from '../components/Input.jsx';
import Button from '../components/Button.jsx';
import { signup } from '../functions/authfun.js';

const Signup = ()=>{
    const { setAuth } = useContext(Mycontext);
    const [ data,setData ] = useState({
        email:'',
        fullname:'',
        logo:'',
        gender:'',
        uname:'',
        pass:'',
        agree:false,
        projects:[],
    })
    const cngSignupFun = (e)=>{
        const oldData = {...data};
        const inpName = e.target.name;
        const inpValue = e.target.value;
        oldData[inpName] = inpValue;
        setData(oldData);
    }
    const signupSubFun = (e)=>{
        e.preventDefault();
        signup(data);
        setAuth('login');
    }
    return(
        <div>
            <div className='flex justify-between items-center bg-slate-400 px-4 py-1 my-2 font-bold'>
                <div>Signup Page</div>
                <SlClose />
            </div>
            <div className='p-4'>
                <form onSubmit={signupSubFun}>
                    <Input onChange={cngSignupFun} value={data.email} name='email' lable='email' type='email' required='true'/>
                    <Input onChange={cngSignupFun} value={data.fullname} name='fullname' lable='full name' required='true'/>
                    <Input onChange={cngSignupFun} name='logo' lable='profile image' type='file'/>
                    <div>Gender :</div>
                    <div className='flex justify-center items-center gap-2'>
                        <Input onChange={cngSignupFun} value='male' type='radio' name='gender' id='male'/>
                        <label for='male'>Male</label>
                        <Input onChange={cngSignupFun} value='female' type='radio' name='gender' id='female'/>
                        <label for='female'>Female</label>
                        <Input onChange={cngSignupFun} value='other' type='radio' name='gender' id='other'/>
                        <label for='other'>Other</label>
                    </div>
                    <Input onChange={cngSignupFun} value={data.uname} name='uname' lable='user name' required='true'/>
                    <Input onChange={cngSignupFun} value={data.pass} name='pass' lable='password' type='password' required='true'/>
                    <div className='flex justify-center items-center gap-1 text-[12px]'>
                        <Input onChange={cngSignupFun} value={data.agree} name='agree' type='checkbox' required='true'/>
                        <div>I agree accept all :</div>
                        <div className='text-blue-600'>term & conditions</div>
                    </div>
                    <Button lable='sign-up' myClass='w-[100%] my-6'/>
                </form>
            </div>
            <div className='flex justify-center items-center gap-1'>
                <div>Have already an account ?</div>
                <div onClick={()=>setAuth('login')} className='text-blue-600 underline'>Log-in</div>
            </div>
        </div>
    )
}

export default Signup;