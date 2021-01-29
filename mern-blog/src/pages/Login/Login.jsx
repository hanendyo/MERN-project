import React from 'react'
import './Login.css'
import {loginBg} from '../../assets/Assets'
import { Button, Gap, Input, Link } from '../../components/atoms/Atoms'
import { useHistory } from 'react-router-dom'


const Login = () => {
    const history = useHistory();
    return (
        <div className='mainPage'>
        <div className='left'>
            <img src={loginBg} alt="loginBg" className='bgImage'/>
        </div>
        <div className='right'>
            <h2 className='title'>Login</h2>
            <Input label='Email' placeholder='Email' />
            <Gap height={8}/>
            <Input label='Password' placeholder='Password' />
            <Gap height={20}/>
            <Button title='Login'></Button>
            <Gap height={100}/>
            <Link title="Don't have an account? Register here!" onClick={()=> history.push('/register')}/>
        </div>
    </div>
    )
}

export default Login
