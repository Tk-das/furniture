import { useState } from 'react';
import { SlClose } from "react-icons/sl";
import Input from '../../components/Input.jsx';
import Button from '../../components/Button.jsx';

const AddItem = ()=>{
    const [ data,setData ] = useState({itemname:'',width:'',height:'',rate:'',qty:''});
    const cngAddItemFun = (e)=>{
        const oldData = {...data};
        const inpName = e.target.name;
        const inpValue = e.target.value;
        oldData [inpName]=inpValue;
        setData(oldData);
    }
    return(
        <div className='w-[100%] min-h-[100vh] bg-slate-800 absolute top-0 left-0 text-white'>
            <div className='flex justify-between items-center px-4 py-1 my-4 bg-slate-900 font-bold'>
                <div>Add Item</div>
                <SlClose />
            </div>
            <div className='p-4 md:w-[70%] mx-auto'>
                <form>
                    <Input onChange={cngAddItemFun} name='itemname' value={data.itemname} lable='item name' required='true'/>
                    <div className='grid grid-cols-2 gap-4'>
                        <Input onChange={cngAddItemFun} name='width' value={data.width} type='number' lable='width' required='true'/>
                        <Input onChange={cngAddItemFun} name='height' value={data.height} type='number' lable='height' required='true'/>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <Input onChange={cngAddItemFun} name='rate' value={data.rate} type='number' lable='rate' required='true'/>
                        <Input onChange={cngAddItemFun} name='qty' value={data.qty} type='number' lable='qty/-' required='true'/>
                    </div>
                    <Button lable='save' myClass='w-[100%] mt-6'/>
                </form>
            </div>
        </div>
    )
}

export default AddItem;