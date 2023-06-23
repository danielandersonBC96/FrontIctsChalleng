import React from 'react'
import "./SideDrawer.css"
import { Link } from 'react-router-dom'

const SideDrawer = ({show, click}) => {

    const sidedrawerClass = ['sidedrawer']

    if( show) {
        sidedrawerClass.push('show')
    }
    return (
        <div className={sidedrawerClass.join(" ")  }  onClick={click}  >
           
            <span className='close__button'>
               ❌
            </span>
            <ul className=' sidedrawer__links' >
                
                <Link to="/cart">            
                  <li className='cart__links'>
                    <i className='fas fa-shoopinng-cart'></i>
                      <span>          
                       CART 
                     
                      </span>
                    </li>
                  </Link>

                  
                   <Link  to= "/">
                    
                       <li className='cart__links'>
                       <span> SHOPPING </span>
                       </li>
                   </Link>
                      
                
            </ul>


        </div>
    )
}

export default SideDrawer