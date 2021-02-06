import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '../../atoms/Atoms'

import './BlogItem.css'

const BlogItem = (props) => {
    const history = useHistory();

    const {image, title, name, date, body, _id} = props

    return (
        <div className='blogItem'>
            <img className='imageThumb' src={image} alt=""/>
            <div className='contentDetail'>
                <p className='title'>{title}</p>
                <p className='author'>{name} - {date}</p>
                <p className='content'>{body}</p>
                <Button title='View Detail' onClick={()=> history.push(`/detail-blog/${_id}`)} />
            </div>
        </div>
    )
}

export default BlogItem
