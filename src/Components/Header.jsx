import React, { useState } from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header=()=>{
    
        const [islogin, setIslogin] = useState(true);
    
    return(
        <div className="header">
            <img className="img" src="https://th.bing.com/th/id/OIP.GnGUMN-qkslA583K7kOVGgHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Logo"/>
        <>
        <ul className="list">
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to = "/about">About Us</Link></li>
            <li><Link to  = "/contact"> Contact Us </Link></li>
            <li>Cart</li>
            <button className= "btn" onClick={()=>setIslogin(prev=> !prev)}>{islogin? 'Login' : 'Logout'}</button>
            
        </ul>
        </>
        </div>
        
        
    )
}

export default Header;
