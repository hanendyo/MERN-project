import React from 'react'
import './Upload.css'

const Upload = ({img, ...rest}) => {
    return (
        <div className='upload'>
            <img className='preview' src={img} alt=""/>
            <input type="file" {...rest}/>
        </div>
    )
}

export default Upload
