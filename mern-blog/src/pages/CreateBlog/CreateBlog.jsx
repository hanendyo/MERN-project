import React, { useEffect, useState } from 'react'
import './CreateBlog.css'
import { useHistory, withRouter } from 'react-router-dom'
import { Button, Gap, Input, TextArea, Upload, Link } from '../../components/atoms/Atoms'
import {postToAPI, setForm, setImgPreview, updateToAPI} from '../../config/redux/Actions/Actions'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'


const CreateBlog = (props) => {
    const history = useHistory();
    const {form, imgPreview} = useSelector(state=>state.CreateBlogReducer)
    const {title, body} = form;
    const [isUpdate, setIsUpdate] = useState(false)

    const dispatch = useDispatch();

    useEffect(()=>{
        console.log(`params`, props);
        const id = props.match.params.id
        if(id){
            setIsUpdate(true);
            axios.get(`http://localhost:5000/v1/blog/post/${id}`)
            .then(res => {
                const data = res.data.data;
                console.log(`res:`, data);

                dispatch(setForm(`title`, data.title))
                dispatch(setImgPreview(`http://localhost:5000/${data.image}`))
                dispatch(setForm(`body`, data.body))
            })
            .catch(err => console.log(`err:`, err))
        } else {
            dispatch(setForm(`title`, ''))
            dispatch(setImgPreview(``))
            dispatch(setForm(`body`, ''))
        }
    }, [dispatch,props])

    const onSubmit =()=> {
        const id = props.match.params.id
        if(isUpdate){
            updateToAPI(form, id)
            clearFormData(form)
            
        } else {
            postToAPI(form)
            clearFormData(form)
        }
    }

    const onUploadImage =(e)=>{
        const fileImage = e.target.files[0];
         dispatch(setForm('image', fileImage));
         dispatch(setImgPreview(URL.createObjectURL(fileImage)))
    }

    const clearFormData =()=> {
        dispatch(setForm(`title`, ''))
        dispatch(setImgPreview(''))
        dispatch(setForm(`body`, ''))
    }

    

    return (
        <div className='wrapper'>
            <Link title='Back' onClick={()=> history.push('/')}/>
            <h1>{isUpdate ? `Update` : `Create`} Blog</h1>
            <Input label='Post Title' value={title} onChange={(e)=>dispatch(setForm('title',e.target.value))}/>
            <Upload  onChange={(e)=>onUploadImage(e)} img={imgPreview}/>
            <TextArea value={body} onChange={(e)=>dispatch(setForm('body',e.target.value))}/>
            <Gap height={20}/>
            <div className='buttonBlog' >
            <Button title={isUpdate ? `update` : `submit`} onClick={onSubmit} />
            </div>
        </div>
    )
}
export default withRouter(CreateBlog)
