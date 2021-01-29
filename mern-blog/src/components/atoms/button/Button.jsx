import React from 'react'
import './Button.css'

const Button = ({title, ...rest}) => {
    return (
            <button className='button' {...rest}>{title}</button>
    )
}

export default Button
