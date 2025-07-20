import { useContext,useState } from 'react';
import Mycontext from '../../context/Mycontext.jsx';
import { AiOutlineCloseCircle } from "react-icons/ai";
import Input from '../../components/Input.jsx';
import Button from '../../components/Button.jsx';
import { billCreate } from '../../functions/billfun.js';

const CreateProject = ()=>{
    const { toggle2,setToggle2,user } = useContext(Mycontext);
    const [ data,setData ] = useState({
        uid:user._id,
        proname:'',
        woner:'',
        category:'',
        email:'',
        advance:'',
        items:[]
    });
    const cngCreateProjectFun = (e)=>{
        const oldData = {...data};
        const inpName = e.target.name;
        const inpValue = e.target.value;
        oldData[inpName] = inpValue;
        setData(oldData);
    }
    const createProjectFun = (e)=>{
        e.preventDefault();
        billCreate(data,setToggle2);
    }
    return(
        <div className={`bg-slate-800 w-[100%] min-h-[100vh] absolute top-0 left-0 text-white ${(toggle2==='createproject') ? '' : 'hidden'}`}>
            <div className='flex justify-between items-center bg-slate-900 px-4 py-1 my-2'>
                <div className='capitalize font-bold'>create new project</div>
                <AiOutlineCloseCircle onClick={()=> setToggle2('')} fontSize={20}/>
            </div>
            <div className='p-4 mx-auto md:w-[70%]'>
                <form onSubmit={createProjectFun}>
                    <Input onChange={cngCreateProjectFun} name='proname' value={data.proname} lable='project name'required='true'/>
                    <Input onChange={cngCreateProjectFun} name='woner' value={data.woner} lable='woner'required='true'/>
                    <Input onChange={cngCreateProjectFun} name='category' value={data.category} lable='category' required='true'/>
                    <Input onChange={cngCreateProjectFun} name='email' value={data.email} lable='email' type='email'/>
                    <Input onChange={cngCreateProjectFun} name='advance' value={data.advance} lable='advance pay' type='number'/>
                    <Button lable='create' myClass='w-[100%] my-6'/>
                </form>
            </div>
        </div>
    )
}

export default CreateProject;

