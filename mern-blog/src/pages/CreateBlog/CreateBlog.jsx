import React from 'react'
import { Button, Gap, Input, TextArea, Upload, Link } from '../../components/atoms/Atoms'
import { useHistory } from 'react-router-dom'
import './CreateBlog.css'

const CreateBlog = () => {
    const history = useHistory();
    return (
        <div className='wrapper'>
            <Link title='Back' onClick={()=> history.push('/')}/>
            <h1>CREATE BLOG</h1>
            <Input label='Post Title'/>
            <Upload/>
            <TextArea/>
            <Gap height={20}/>
            <div className='buttonBlog' style={{display:`flex`}}>
            <Button title='Save'/>
            </div>
        </div>
    )
}

export default CreateBlog
