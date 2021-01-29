import React from 'react'
import './Register.css'
import {registerBg} from '../../assets/Assets'
import { Button, Gap, Input, Link } from '../../components/atoms/Atoms'
import { useHistory } from 'react-router-dom'

const Register = () => {
    const history = useHistory();
    return (

        <div className='mainPage'>
            <div className='left'>
                <img src={registerBg} alt="registerBg" className='bgImage'/>
            </div>
            <div className='right'>
                <h2 className='title'>REGISTER</h2>
                <Input label='Full Name' placeholder='Full Name' />
                <Gap height={8}/>
                <Input label='Email' placeholder='Email' />
                <Gap height={8}/>
                <Input label='Password' placeholder='Password' />
                <Gap height={20}/>
                <Button title='Register'></Button>
                <Gap height={100}/>
                <Link title='Have an account? Login here!' onClick={()=> history.push('/login')}/>
            </div>
        </div>
    )
}

export default Register
