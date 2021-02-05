import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Modal from '../Modal/Modal';
import AuthForm from '../AuthForm/AuthForm';

function Navbar({ toggleColor = false }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    changeBackground();
  }, []);

  const changeBackground = () => {
    if (toggleColor) {
      if (window.scrollY >= 80) {
        setScrolled(true);
      }
      else {
        setScrolled(false);
      }
    }
    else {
      setScrolled(true);
    }
  }

  window.addEventListener('scroll', changeBackground);
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className={scrolled ? 'navbar active' : 'navbar'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="/images/logo.png" alt="" />
            <p>TODO-APP</p>
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
                className='nav-links-mobile'
                to='/#'
                onClick={() => {
                  closeMobileMenu();
                  toggleModal();
                }}
              >
                LOGIN
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' onClick={toggleModal}>LOGIN</Button>}
          <Modal showModal={showModal} setShowModal={setShowModal}> <AuthForm /> </Modal>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
