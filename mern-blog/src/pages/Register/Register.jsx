import React from 'react'
import './Register.css'
import {registerBg} from '../../assets/Assets'
import { Button, Gap, Input, Link } from '../../components/atoms/Atoms'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerToAPI, setFormRegister } from '../../config/redux/Actions/Actions'

const Register = () => {
    const history = useHistory();
    const {data, isSuccess} = useSelector(state => state.RegisterReducer)
    const dispatch = useDispatch();
    console.log(`data`,isSuccess);

    const onRegister =(e)=> {
        e.preventDefault();
        registerToAPI(data).then(res=>{
            console.log(`res`, res);
            if(res.status === 201){
                history.push('/login')
            }
        })
      
    }

    // const clearFormData =()=> {
    //     dispatch(setFormRegister(`name`, ''))
    //     dispatch(setFormRegister(`email`, ''))
    //     dispatch(setFormRegister(`password`, ''))
    // }

    return (
        <div className='mainPage'>
            <div className='left'>
                <img src={registerBg} alt="registerBg" className='bgImage'/>
            </div>
            <div className='right'>
                <h2 className='title'>REGISTER</h2>
                <Input label='Full Name' placeholder='Full Name' onChange={(e)=>dispatch(setFormRegister('name', e.target.value))}/>
                <Gap height={8}/>
                <Input label='Email' placeholder='Email' type='email' onChange={(e)=>dispatch(setFormRegister('email', e.target.value))} />
                <Gap height={8}/>
                <Input label='Password' placeholder='Password' type='password' onChange={(e)=>dispatch(setFormRegister('password', e.target.value))}/>
                <Gap height={20}/>
                <Button title='Register' onClick={onRegister}></Button>
                <Gap height={100}/>
                <Link title='Have an account? Login here!' onClick={()=> history.push('/login')}/>
            </div>
        </div>
    )
}

export default Register
