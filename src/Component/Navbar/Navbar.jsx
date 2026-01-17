import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/shopContext'

function Navbar() {

const [menu, setMenu] = useState("shop")
const {getTotalCartItems} = useContext(ShopContext);
const [mobileMenu, setMobileMenu] = useState(false);


  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>BuyKart</p>
        </div>
        {mobileMenu && (
  <ul className="mobile-menu">
    <li><Link to="/">Shop</Link></li>
    <li><Link to="/mens">Men</Link></li>
    <li><Link to="/womens">Women</Link></li>
    <li><Link to="/kids">Kids</Link></li>
  </ul>
)}

        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}} ><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}} ><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}} ><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}} ><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
  ☰
</div>

        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <div className="cart-wrapper">
            <Link to='/cart'><img src={cart} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar