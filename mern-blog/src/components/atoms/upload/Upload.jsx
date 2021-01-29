import React from 'react'
import { webiThumb3 } from '../../../assets/Assets'

import './Upload.css'

const Upload = () => {
    return (
        <div className='upload'>
            <img className='preview' src={webiThumb3} alt=""/>
            <input type="file"/>
        </div>
    )
}

export default Upload
