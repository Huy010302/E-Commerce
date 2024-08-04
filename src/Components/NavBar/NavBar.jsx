import React, { useContext, useRef, useState } from 'react'
import './NavBar.css'
import logo from '../Assets/logo.png'
import carticon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

const NavBar = () => {
    const [menu, setMenu] = useState("shop")
    const {getTotalCartItems} = useContext (ShopContext)
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" className='logo' />
                <p>E-Commerce</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => { setMenu("shop") }}>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        Shop{menu === "shop" ? <hr /> : <></>}
                    </Link>
                </li>
                <li onClick={() => { setMenu("men") }}>
                    <Link to='men' style={{ textDecoration: 'none' }}>
                        Men {menu === "men" ? <hr /> : <></>}
                    </Link>
                </li>
                <li onClick={() => { setMenu("women") }}>
                    <Link to='women' style={{ textDecoration: 'none' }}>
                        Women{menu === "women" ? <hr /> : <></>}
                    </Link>
                </li>
                <li onClick={() => { setMenu("kid") }}>
                    <Link to='kid' style={{ textDecoration: 'none' }}>
                        Kids{menu === "kid" ? <hr /> : <></>}
                    </Link>
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='login' style={{ textDecoration: 'none' }}>
                    <button>Login</button>
                </Link>
                <Link to='cart' style={{ textDecoration: 'none' }}>
                    <img src={carticon} alt="" className='cart-icon' />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default NavBar