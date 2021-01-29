import React from 'react'
import { useHistory } from 'react-router-dom'
import { webiThumb2 } from '../../../assets/Assets'
import { Button } from '../../atoms/Atoms'

import './BlogItem.css'

const BlogItem = () => {
    const history = useHistory();
    return (
        <div className='blogItem'>
            <img className='imageThumb' src={webiThumb2} alt=""/>
            <div className='contentDetail'>
                <p className='title'>Title Blog</p>
                <p className='author'>Author - Date Post</p>
                <p className='content'>content blog:
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maiores, illo esse laboriosam dolorum ut.
                </p>
                <Button title='View Detail' onClick={()=> history.push('/detail-blog')} />
            </div>
        </div>
    )
}

export default BlogItem
