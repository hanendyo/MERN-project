import React from 'react'
import { fbImg, twitterImg } from '../../../assets/Assets'
import './Footer.css'

const Footer = () => {

    const Icon =({img})=>{
        return(
            <div className='iconWrapper'>
                <img className='iconMedsos' src={img} alt="ICON"/>
            </div>
        )
    }

    return (
       <div>
           <div className='footer'>
               <div>
                    <img className='logo' src="" alt="LOGO"/>
               </div>
               <div className='socialWrapper'>
                   <Icon img={fbImg}/>
                   <Icon img={twitterImg}/>
               </div>
           </div>
           <div className='copyright'>
                <p>COPYRIGHT</p>
           </div>
       </div>
    )
}

export default Footer
