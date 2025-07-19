import React from 'react'
import "./Header.css"

const Header=()=>{
    const handlehome=()=>{
      return(
        <Home/>
      )
    }
    return(
        <div className="header">
            <img onClick={handlehome} className="img" src="https://th.bing.com/th/id/OIP.GnGUMN-qkslA583K7kOVGgHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"/>
        <>
        <ul className="list">
            <li onClick={handlehome}>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Cart</li>
            
        </ul>
        </>
        </div>
        
        
    )
}

const Home = () => {
  return (
    <div>
      <Header/>
    </div>
  )
}

export default Home
