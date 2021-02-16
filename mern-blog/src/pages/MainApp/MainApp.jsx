import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Footer, Header } from '../../components/molecules/Molecules'

import { CreateBlog, DetailBlog, Home } from '../Pages'

import './MainApp.css'



const MainApp = () => {
    return (
        <div className='mainAppWrapper'>
            <div className='headerWrapper'>
               <Header/>
            </div>
            <div className='contentWrapper'>
                <Router>
                    <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route path='/create-blog/:id?'>
                        <CreateBlog/>
                    </Route>
                    <Route path='/detail-blog/:id'>
                        <DetailBlog/>
                    </Route>
                        
                    </Switch>
                </Router>
            </div>
            <div className='footerWrapper'>
                <Footer/>         
            </div>
        </div>
    )
}

export default MainApp
