import React from 'react'
import './Login.css'
import {loginBg} from '../../assets/Assets'
import { Button, Gap, Input, Link } from '../../components/atoms/Atoms'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LoginToAPI, setFormLogin } from '../../config/redux/Actions/Actions'


const Login = () => {
    const history = useHistory();
    const {data} = useSelector(state => state.LoginReducer)
    const dispatch = useDispatch();
    // console.log(`data`,data);

    const onLogin =(e)=> {
        e.preventDefault();

        LoginToAPI(data).then(res=>{
            if(res.status === 200){
                history.push('/')
            }
        })

    }


    return (
        <div className='mainPage'>
        <div className='left'>
            <img src={loginBg} alt="loginBg" className='bgImage'/>
        </div>
        <div className='right'>
            <h2 className='title'>Login</h2>
            <Input label='Email' type='email' placeholder='Email' onChange={(e)=>dispatch(setFormLogin(`email`, e.target.value))}/>
            <Gap height={8}/>
            <Input label='Password' type='password' placeholder='Password' onChange={(e)=>dispatch(setFormLogin(`password`, e.target.value))}/>
            <Gap height={20}/>
            <Button title='Login' onClick={onLogin}></Button>
            <Gap height={100}/>
            <Link title="Don't have an account? Register here!" onClick={()=> history.push('/register')}/>
        </div>
    </div>
    )
}

export default Login
