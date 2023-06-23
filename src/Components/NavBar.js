import React from 'react'
import './NavBar.css'
import { Link} from 'react-router-dom'

const NavBar = ({click}) => {
    return (
        <nav className='navbar'>
            <div className='navbar__logo'>      
              <h2>  Shopping Center ICTS  </h2>
            </div>
            <ul className=' navbar__links'>
                  <li>
                    <Link to="/cart" className='cart__links'>
                    <i className='shopping-cart'> </i>
                    🛒

                    CartScreem
                     <span>
                         <span className='cartlogo__badge'>0</span>
                     </span>
                   
                    </Link>   
                  </li>     
                  <li>
                    <Link to="/" className=' shopping__links'>
                    🛍️ 
                        Shopping
                        <span className='shopping__badge'></span>
                    </Link>   
                  </li>           

            </ul>
            <div className="hamburger" onClick={click}>
         ☰
              <div></div>
              <div></div>
              <div></div>
      </div>

        </nav>
    ) }

export default NavBar