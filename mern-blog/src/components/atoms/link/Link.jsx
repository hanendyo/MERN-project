import React from 'react'

import './Link.css'

const Links = ({title, ...rest}) => {
    return (
            <p className="link" {...rest}>{title}</p>
        
    )
}

export default Links
