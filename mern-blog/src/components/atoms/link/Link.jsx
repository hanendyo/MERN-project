import React from 'react'

import './Link.css'

const Links = ({title, onClick}) => {
    return (
            <p className="link" onClick={onClick}>{title}</p>
        
    )
}

export default Links
