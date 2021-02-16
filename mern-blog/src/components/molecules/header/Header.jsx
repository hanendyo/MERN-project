import React from 'react'
import { useHistory } from 'react-router-dom'
import { LogoutAPI } from '../../../config/redux/Actions/Actions';
import './Header.css'

const Header = () => {
    const history = useHistory();

    const onLogout =()=>{
        LogoutAPI().then(res => {
            if(res.status === 200){
                history.push('/login')
            }
        })
    }

    return (
        <div className='header'>
            <p className='logoApp'>MERN-blog</p>
            <p className='menuItem' onClick={onLogout}>Logout</p>
        </div>
    )
}

export default Header
