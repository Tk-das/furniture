import { useContext } from 'react';
import Mycontext from '../../context/Mycontext.jsx';
import { SlClose } from "react-icons/sl";
import { AiOutlineDelete } from "react-icons/ai";
import Button from '../../components/Button.jsx';

const ProjectInfo = ()=>{
    const { toggle2 } = useContext(Mycontext);
    return(
        <div className={`absolute left-0 top-0 w-[100%] min-h-[100vh] bg-slate-800 text-white ${(toggle2==='projectinfo')?'':'hidden'}`}>
            <div className='flex justify-between items-center bg-slate-900 px-4 py-1 my-2'>
                <div className='capitalize font-bold'>Project Info</div>
                <SlClose />
            </div>
            <div className='grid grid-cols-2 gap-1 my-4 text-slate-300'>
                <div className='text-right'>Project Name : </div>
                <div> Sidha Suburia </div>
                <div className='text-right'>Category : </div>
                <div>Carpenter </div>
                <div className='text-right'>Email : </div>
                <div>tk448@gmail.com</div>
                <div className='text-right'>Advance Pay : </div>
                <div>7000/-</div>
            </div>
            <div className='border rounded m-1 p-1 text-[10px] text-slate-300 md:w-[70%] mx-auto'>
                <div className='grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] text-center border-b font-semibold text-yellow-600'>
                    <div>Sl.</div>
                    <div>Item Name</div>
                    <div>Width</div>
                    <div>Height</div>
                    <div>S.ft/-</div>
                    <div>Rate</div>
                    <div>Qty.</div>
                    <div>Amount</div>
                    <div>Action</div>
                </div>
                <Table />
                <Table />
                <Table />
                <Table />
                <div className='grid grid-cols-[5fr_2fr] border-t p-2 mt-4 font-semibold'>
                    <div>
                        <div className='capitalize font-semibold flex flex-col gap-2'>Payment Details :</div>
                        <div className='flex gap-2'>
                            <div>25-06-25 : </div>
                            <div>20000/-</div>
                            <AiOutlineDelete className='text-red-400 ml-2'/>
                        </div>
                        <div className='flex gap-2'>
                            <div>25-06-25 : </div>
                            <div>20000/-</div>
                            <AiOutlineDelete className='text-red-400 ml-2'/>
                        </div>
                        <div className='flex gap-2'>
                            <div>25-06-25 : </div>
                            <div>20000/-</div>
                            <AiOutlineDelete className='text-red-400 ml-2'/>
                        </div>
                    </div>
                    <div>
                        <div className='grid grid-cols-2 text-right text-cyan-600'>
                            <div>Total : </div>
                            <div>90000/-</div>
                            <div>Payment : </div>
                            <div>50000/-</div>
                            <div>Advance : </div>
                            <div>1000/-</div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-[5fr_2fr] border-t py-2'>
                    <div>NOTE: thanks for my service...</div>
                    <div className='grid grid-cols-2 text-right font-bold text-red-400'>
                        <div>Blance : </div>
                        <div>30000/-</div>
                    </div>
                </div>
            </div>
            <div className='flex justify-around py-4'>
                <div className='capitalize font-semibold text-[10px] flex items-center gap-4'>
                    <div className='text-green-400'>add payment</div>
                    <div className='text-cyan-600'>add item</div>
                </div>
                <Button lable='download' myClass='text-[8px]'/>
            </div>
        </div>
    )
}

export default ProjectInfo;

const Table = ()=>{
    return(
        <div className='grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] text-[10px] text-center mt-2'>
            <div className='font-semibold'>110.</div>
            <div>Wardobe</div>
            <div>11</div>
            <div>9</div>
            <div>99 sft/-</div>
            <div className='text-blue-600'>350</div>
            <div>20</div>
            <div>35000/-</div>
            <div className='text-red-400 flex justify-center items-center'>
                <AiOutlineDelete />
            </div>
        </div>
    )
}