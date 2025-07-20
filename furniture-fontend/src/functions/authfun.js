import axios from 'axios';
const url = process.env.URL || 'http://localhost:5000';

export const signup = (data,setAuth)=>{
    axios.post(`${url}/user/signup`,data)
    .then((resp)=>alert('Rejister Sucsess'))
    .catch((err)=>alert(err))
}

export const login = (data,setAuth)=>{
    axios.post(`${url}/user/login`,data)
    .then((resp)=>{
        localStorage.setItem('jwtToken',JSON.stringify(resp.data.data));
        alert('Login Sucsess');
        setAuth('home');
    })
    .catch((err)=>alert(err))
}


