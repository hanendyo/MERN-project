import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Gap } from '../../atoms/Atoms'

import './BlogItem.css'

const BlogItem = (props) => {
    const history = useHistory();

    const {image, title, name, date, body, _id, onDelete} = props


    return (
        <div className='blogItem'>
            <img className='imageThumb' src={image} alt=""/>
            <div className='contentDetail'>
                <p className='title'>{title}</p>
                <p className='author'>{name} - {date}</p>
                <p className='content'>{body}</p>
                <Gap height={10}/>
                <Button title='View Detail' onClick={()=> history.push(`/detail-blog/${_id}`)} />
                <Gap height={5}/>
                <Button  title='edit' onClick={()=> history.push(`/create-blog/${_id}`)} style={{backgroundColor: `lightblue`}} />
                <Gap height={5}/>
                <Button title='delete' onClick={()=>onDelete(_id)} style={{backgroundColor: `red`}}  />
            </div>
        </div>
    )
}

export default BlogItem
