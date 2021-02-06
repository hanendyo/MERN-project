import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import { Link } from '../../components/atoms/Atoms'

import './DetailBlog.css'

const DetailBlog = (props) => {
    const history = useHistory();
    const [data, setData] = useState({})
    const {title, image, body, author, createdAt} = data
    
    useEffect(()=>{
        const id = props.match.params.id;
        axios.get(`http://localhost:5000/v1/blog/post/${id}`)
        .then(res=>{
            console.log(`success`, res);
            setData(res.data.data)
        })
        .catch(err => err)
    }, [props])

    if(author){
        return (
            <div className='wrapper'>
                <Link title='Back to home' onClick={()=> history.push('/')}/>
                <img className='imgCover' src={`http://localhost:5000/${image}`} alt=""/>
                <p className='blogTitle'>{title}</p>
                <p className='blogAuthor'>{author.name} - {createdAt}</p>
                <p className='blogContent'>{body}</p>
            </div>
        )
    } 
    return <h2>Loading data, please wait.</h2>

}

export default withRouter(DetailBlog)
