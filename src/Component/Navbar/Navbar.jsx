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


  const[menuIcon , setmenuIcon]= useState(false);
  const toggleMenu= ()=>{
    menuIcon ? setmenuIcon(false) : setmenuIcon(true);

  }


  return (
    <div>
      <nav className={`container ${isSticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt='Logo' className='logo' />
        
        <ul className= {menuIcon ? '' : 'hide-mobile-menu'}>
          <li><Link to="hero" spy={true} smooth={true} offset={0}>Home</Link></li>
          <li><Link to="program" spy={true} smooth={true} offset={-210}>Program</Link></li>
          <li><Link to="about" spy={true} smooth={true} offset={-170}>About</Link></li>
          <li><Link to="Gallery" spy={true} smooth={true} offset={-170}>Campus</Link></li>
          <li><Link to="testimonials" spy={true} smooth={true} offset={-210}>Testimonial</Link></li>
          <li><Link to="contact" spy={true} smooth={true} offset={-210} className='btn'>Contact Us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
      </nav>
    </div>
  );
}

export default Navbar;
