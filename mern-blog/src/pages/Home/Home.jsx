import React from 'react';
import { Button, Gap } from '../../components/atoms/Atoms';
import { BlogItem } from '../../components/molecules/Molecules';
import {useHistory} from 'react-router-dom'

import './Home.css'

const Home = () => {
    const history = useHistory();
    return (
        <div className='homePageWrapper'>
            <div className='createWrapper'>
                <Button title='Create blog' onClick={()=> history.push('/create-blog')} />
            </div>
            <Gap height={20}/>
            <div className='contentWrapper'>
                <BlogItem/>
                <BlogItem/>
                <BlogItem/>
                <BlogItem/>
            </div>
            <div className='pagination'>
                <Button title='previous'/>
                <Gap width={30}/>
                <Button title='next'/>
            </div>
            <Gap height={20}/>
        </div>
    )
}

export default Home;
