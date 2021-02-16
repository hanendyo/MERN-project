import React, { useEffect, useState } from 'react';
import { Button, Gap } from '../../components/atoms/Atoms';
import { BlogItem } from '../../components/molecules/Molecules';
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import './Home.css'

import { confirmAlert } from 'react-confirm-alert'; // ract-confirm-alert
import 'react-confirm-alert/src/react-confirm-alert.css'; 

// ACTIONS
import { setDataBlogPost } from '../../config/redux/Actions/Actions';
import axios from 'axios';

const Home = () => {
    const [pageCounter, setPageCounter] = useState(1)
    const {dataBlogPost, page} = useSelector(state => state.HomeReducer) //--> use a global state (combine reducer)
    
    // hooks
    const dispatch = useDispatch();
    
    console.log(`stateG:`, dataBlogPost);

    useEffect(()=>{
        dispatch(setDataBlogPost(pageCounter))
    }, [pageCounter, dispatch])


    // METHODS
    const previous =()=>{
     setPageCounter(pageCounter > 1 ? pageCounter - 1 : 1)
    }

    const next =()=>{
      setPageCounter(pageCounter === page.totalPage ? page.totalPage : pageCounter + 1)
    }

    const confirmDelete =(id)=>{
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to delete this?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    axios.delete(`http://localhost:5000/v1/blog/post/${id}`)
                    .then(res => dispatch(setDataBlogPost(pageCounter)))
                    .catch(err=>err)
                    
                }

              },
              {
                label: 'No',
                onClick: () => console.log('Click No')
              }
            ]
          });
    }

    const history = useHistory();
    
    return (
        <div className='homePageWrapper'>
            <div className='createWrapper'>
                <Button title='Create blog' onClick={()=> history.push('/create-blog')} />
            </div>
            <Gap height={20}/>
            <div className='contentWrapper'>
                {dataBlogPost.map(blog => {
                    return <BlogItem 
                                key={blog._id}
                                image={`http://localhost:5000/${blog.image}`}
                                title={blog.title}
                                name={blog.author.name}
                                date={blog.createdAt}
                                body={blog.body}
                                _id={blog._id}
                                onDelete={confirmDelete}
                            />
                })}
            </div>
            <div className='pagination'>
                <Button title='previous' onClick={previous}/>
                <Gap width={30}/>
                <p className='textPage'>{page.currentPage} / {page.totalPage}</p>
                <Gap width={30}/>
                <Button title='next' onClick={next}/>
            </div>
            <Gap height={20}/>
        </div>
    )
}

export default Home;
