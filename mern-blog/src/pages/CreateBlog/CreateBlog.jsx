import React from 'react'
import './CreateBlog.css'
import { useHistory } from 'react-router-dom'
import { Button, Gap, Input, TextArea, Upload, Link } from '../../components/atoms/Atoms'
import {postToAPI, setForm, setImgPreview} from '../../config/redux/Actions/Actions'
import { useDispatch, useSelector } from 'react-redux'

const CreateBlog = () => {
    const history = useHistory();
    const {form, imgPreview} = useSelector(state=>state.CreateBlogReducer)
    const {title, body} = form;
    const dispatch = useDispatch();

    const onSubmit =()=> {
        postToAPI(form)
    }

    const onUploadImage =(e)=>{
        const fileImage = e.target.files[0];
         dispatch(setForm('image', fileImage));
         dispatch(setImgPreview(URL.createObjectURL(fileImage)))
    }

    return (
        <div className='wrapper'>
            <Link title='Back' onClick={()=> history.push('/')}/>
            <h1>CREATE BLOG</h1>
            <Input label='Post Title' value={title} onChange={(e)=>dispatch(setForm('title',e.target.value))}/>
            <Upload  onChange={(e)=>onUploadImage(e)} img={imgPreview}/>
            <TextArea value={body} onChange={(e)=>dispatch(setForm('body',e.target.value))}/>
            <Gap height={20}/>
            <div className='buttonBlog' >
            <Button title='Save' onClick={onSubmit}/>
            </div>
        </div>
    )
}
export default CreateBlog
