import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo8.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li>
          <Link to='hero' smooth={true} offset={0} duration={500}>
            HOME
          </Link>
        </li>
        <li>
          <Link to='program' smooth={true} offset={-300} duration={800}>
            SERVICES
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} offset={-60} duration={800}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to='why-choose-us' smooth={true} offset={-100} duration={800}>
            WHY US
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} offset={-60} duration={800}>
            CONTACT US
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
