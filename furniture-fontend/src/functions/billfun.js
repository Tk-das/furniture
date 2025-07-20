import axios from 'axios';
const url = process.env.URL || 'http://localhost:5000';

export const billCreate = (data,setToggle2)=>{
    axios.put(`${url}/bill/billcreate/${data.uid}`,data)
    .then((resp)=>{
        setToggle2('bill')
    })
    .catch((err)=>alert(err.message))
}

export const billDelete = (userId,proId)=>{
    axios.delete(`${url}/bill/user/${userId}/project/${proId}`)
    .then((resp)=>{
        alert('delete sucsess')
        
    })
    .catch((err)=>alert(err.message))
}