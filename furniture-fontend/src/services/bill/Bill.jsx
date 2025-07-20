import { useContext,useEffect,useState } from 'react';
import Mycontext from '../../context/Mycontext.jsx';
import List from '../../components/List.jsx';
import Button from '../../components/Button.jsx';
import CreateProject from './CreateProject.jsx';
import ProjectInfo from './ProjectInfo.jsx';
import { billDelete } from '../../functions/billfun.js';
import axios from 'axios';
const url = process.env.URL || 'http://localhost:5000';

const Bill = ()=>{
    const { setToggle2,user } = useContext(Mycontext);
    const [ userData,setUserData ] = useState([]);
    useEffect(()=>{
        const userUid = user._id;
        axios.get(`${url}/bill/billread/${userUid}`)
        .then((resp)=>{
            setUserData(resp.data.data.projects)
        })
        .catch((err)=>alert(err.message))
    })
    const proListDelete = (ind)=>{
        billDelete(user._id,userData[ind]._id);
    }
    const proListEdit = (ind)=>{
        
        
    }
    return(
        <div>
            <div>
                <CreateProject /> 
                <ProjectInfo />
            </div>
            <div className='flex justify-center items-center gap-4 p-4'>
                <Button onClick={()=> setToggle2('createproject')} lable='create new project'/>
            </div>
            <div className='p-4 md:w-[70%] mx-auto'>
                {(!userData)?'Please create an project..' : userData.map((v,i) => <List key={i} name={v.proname} index={i} onDelete={proListDelete} onEdit={proListEdit}/>) }
            </div>
        </div>
    )
}

export default Bill;