import React, { useState } from 'react'; 
import './navbar.css'; 
import { Link } from 'react-scroll'; 
import { logo } from '../../assets'; 


const Navbar = () => {

  return (

    <nav className='navbar'>

      <img src={logo} alt='logo' className='logo' />

      <div className='desktopMenu'>
        <Link className='desktopMenuLi'>Home</Link>
        <Link className='desktopMenuLi'>About</Link>
        <Link className='desktopMenuLi'>Portfolio</Link>
        <Link className='desktopMenuLi'>Clients</Link>
      </div>

    </nav>

  )
}


export default Navbar; 
