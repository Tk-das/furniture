import { useContext } from 'react';
import Mycontext from '../context/Mycontext.jsx';
import Bill from '../services/bill/Bill.jsx';

const Content = ({user})=>{
    const { toggle } = useContext(Mycontext);
    const contentRender = ()=>{
        switch (toggle){
            case 'bill':
                return <Bill />;
            default: 
                return user.email;
        }
    }
    return(
        <div className='w-[100%] min-h-[90vh]'>
            {contentRender()}
        </div>
    )
}

export default Content;