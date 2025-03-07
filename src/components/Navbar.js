import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button} from './Button.js';
import './Navbar.css';

function NavBar() {
    const[click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [visible, setVisible] = useState(true);
    let lastScrollY = window.scrollY;

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
     showButton(); 
    }, []);

    window.addEventListener('resize', showButton);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false); // Hide navbar on scroll down
      } else {
        setVisible(true); // Show navbar on scroll up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${visible ? "visible" : "hidden"}`}>
      {        <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Cheeri <i className="fa-solid fa-martini-glass-citrus"></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Products
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/sneaks' className='nav-links' onClick={closeMobileMenu}>
                Sneak Peeks
                </Link>
            </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Connect</Button>}
        </div>}
    </nav>
  );
}

export default NavBar;