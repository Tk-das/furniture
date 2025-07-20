import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

const List = ({name='list name',index=0,onDelete,onEdit})=>{
    return(
        <div className='p-2 mb-2 grid grid-cols-[40px_1fr_70px] border rounded'>
            <div className='font-semibold'>{index+1}.</div>
            <div className='capitalize w-[100%]'>{name}</div>
            <div className='flex justify-center items-center gap-6 font-semibold'>
                <FiEdit onClick={()=>onEdit(index)} className='text-purple-600'/>
                <AiOutlineDelete onClick={()=>onDelete(index)} className='text-red-400'/>
            </div>
        </div>
    )
}

export default List;