import React from 'react'

import './TextArea.css'

const TextArea = ({...rest}) => {
    return (
            <textarea className='textArea' {...rest}/>
    )
}

export default TextArea
