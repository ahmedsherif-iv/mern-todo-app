import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [scrolled, setSrolled] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // useEffect(() => {
  //   showButton();
  // }, []);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setSrolled(true);
    }
    else {
      setSrolled(false);
    }
  }

  window.addEventListener('scroll', changeBackground);
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className={scrolled ? 'navbar active' : 'navbar'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="/images/logo.png" />
            <p>TODO-APP</p>
            {/* <i className='fab fa-typo3' /> */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ABOUT
              </Link>
            </li>

            <li>
              <Link
                to='/login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                LOGIN
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' to='/login'>LOGIN</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
