import { useState } from 'react';
import Mycontext from './context/Mycontext.jsx';
import Home from './auth/Home.jsx';
import Login from './auth/Login.jsx';
import Signup from './auth/Signup.jsx';

const App = ()=>{
    const [ user,setUser ] = useState('');
    const [ auth,setAuth ] = useState('');
    const [ toggle,setToggle ] = useState('');
    const [ toggle2,setToggle2 ] = useState('');
    const render = ()=>{
        switch (auth){
            case 'home':
                return <Home />;
            case 'signup':
                return <Signup />;
            case 'login':
                return <Login />;
            default :
                return <Home />
        }
    }
    return(
        <Mycontext.Provider value={{toggle,setToggle,toggle2,setToggle2,auth,setAuth,user,setUser}}>
            <div>
                {render()}
            </div>
        </Mycontext.Provider>
    )
}

export default App;
