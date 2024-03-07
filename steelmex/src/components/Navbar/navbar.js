import './navbar.css'; 
import { Link } from 'react-scroll'; 
import { logo, menu } from '../../assets'; 
import { useState } from "react";

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false); 

  return (

    <nav className='navbar'>
      <img src={logo} alt='logo' className='logo' />
      <div className="desktopMenu">

        <Link activeClass="active" to='intro' smooth={true}  className='desktopMenuLi' onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass="active" to='skills' smooth={true} className='desktopMenuLi' onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass="active" to='works' smooth={true} className='desktopMenuLi' onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link activeClass="active" to='clients' smooth={true} className='desktopMenuLi' onClick={()=>setShowMenu(false)}>Clients</Link>

      </div>
      
      <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />

      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
    
        <Link activeClass="active" to='intro' smooth={true} className='desktopMenuLi' onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass="active" to='skills' smooth={true} className='desktopMenuLi' onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass="active" to='work' smooth={true} className='desktopMenuLi' onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link activeClass="active" to='clients' smooth={true} className='desktopMenuLi' onClick={()=>setShowMenu(false)}>Clients</Link>

      </div>

    </nav>

  )
}


export default Navbar; 
