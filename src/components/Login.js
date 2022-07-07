import React from 'react'
import "./Login.css"
import {Button} from '@mui/material';
import {auth,provider} from "../Firebase"
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
const Login = () => {

    const [state , dispatch] = useStateValue();
   
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then((result) =>{
            dispatch({
                type :actionTypes.SET_USER,
                user: result.user

            })
           
        }).catch((error) =>alert(error.message))      
     
    }
  return (
    <div className='Login'>
        <div className="login__logo">
            <img style={{height:"130px"}} src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png" alt="" />
            <img style={{height:"70px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2560px-Facebook_Logo_%282019%29.svg.png" alt="" />
          
        </div>
        <Button variant="contained" type="submit" onClick={signIn}>Sign In</Button>

    </div>
  )
}

export default Login