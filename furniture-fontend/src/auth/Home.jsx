import { useEffect,useContext } from 'react';
import Mycontext from '../context/Mycontext';
import axios from 'axios';
import Header from '../layouts/Header.jsx';
import Navbar from '../layouts/Navbar.jsx';
import Content from '../layouts/Content.jsx';
import Footer from '../layouts/Footer.jsx';
//import { userAuth } from '../functions/authfun.js';

const Home = ()=>{
    const { user,setUser,setAuth } = useContext(Mycontext);
    useEffect(()=>{
        const jwtoken = JSON.parse(localStorage.getItem('jwtToken'));
        if(!jwtoken){
            setAuth('login');
        }else {
            const url = process.env.URL || 'http://localhost:5000';
            axios.get(`${url}/user`,{headers:{Authorization:`Bearer ${jwtoken}`}})
            .then((resp)=>{
                setUser(resp.data.data);
            })
            .catch((err)=>{
                setAuth('login')
            })
        }
    },[setAuth,setUser])
    return(
        <div>
            <Header user={user} />
            <div className='relative'>
                <Navbar />
            </div>
            <Content user={user}/>
            <Footer />
        </div>
    )
}

export default Home;