import React from 'react'
import { useHistory } from 'react-router-dom'
import { webiThumb1 } from '../../assets/Assets'
import { Link } from '../../components/atoms/Atoms'

import './DetailBlog.css'

const DetailBlog = () => {
    const history = useHistory();
    return (
        <div className='wrapper'>
            <Link title='Back to home' onClick={()=> history.push('/')}/>
            <img className='imgCover' src={webiThumb1} alt=""/>
            <p className='blogTitle'>title blog</p>
            <p className='blogAuthor'>author - date</p>
            <p className='blogContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quaerat tempora iure aut, fuga rem? Molestiae ex distinctio quidem quisquam atque impedit, quasi iste animi nulla pariatur saepe quia quibusdam!</p>
        </div>
    )
}

export default DetailBlog
