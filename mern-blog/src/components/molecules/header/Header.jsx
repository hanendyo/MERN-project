import React from 'react'
import { useHistory } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const history = useHistory();
    return (
        <div className='header'>
            <p className='logoApp'>MERN-blog</p>
            <p className='menuItem' onClick={()=> history.push('/login')}>Logout</p>
        </div>
    )
}

export default Header
