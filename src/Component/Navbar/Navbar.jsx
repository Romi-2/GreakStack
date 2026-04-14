import './Navbar.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [menuIcon, setmenuIcon] = useState(false);
  const toggleMenu = () => {
    menuIcon ? setmenuIcon(false) : setmenuIcon(true);
  }

  // Add this function to handle clicks and prevent text selection
  const handleNavClick = (e) => {
    e.currentTarget.style.userSelect = 'none';
    setTimeout(() => {
      e.currentTarget.style.userSelect = '';
    }, 100);
  };

  return (
    <div>
      <nav className={`container ${isSticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt='Logo' className='logo' />
        
        <ul className={menuIcon ? '' : 'hide-mobile-menu'}>
          <li onMouseDown={handleNavClick}>
            <Link to="hero" spy={true} smooth={true} offset={0}>Home</Link>
          </li>
          <li onMouseDown={handleNavClick}>
            <Link to="program" spy={true} smooth={true} offset={-210}>Program</Link>
          </li>
          <li onMouseDown={handleNavClick}>
            <Link to="about" spy={true} smooth={true} offset={-170}>About</Link>
          </li>
          <li onMouseDown={handleNavClick}>
            <Link to="Gallery" spy={true} smooth={true} offset={-170}>Campus</Link>
          </li>
          <li onMouseDown={handleNavClick}>
            <Link to="testimonials" spy={true} smooth={true} offset={-210}>Testimonial</Link>
          </li>
          <li onMouseDown={handleNavClick}>
            <Link to="contact" spy={true} smooth={true} offset={-210} className='btn'>Contact Us</Link>
          </li>
        </ul>
        <img src={menu_icon} alt="menu icon" className='menu-icon' onClick={toggleMenu}/>
      </nav>
    </div>
  );
}

export default Navbar;