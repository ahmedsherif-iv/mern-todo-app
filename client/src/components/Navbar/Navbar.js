import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Modal from '../Modal/Modal';
import AuthForm from '../AuthForm/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';

function Navbar({ toggleColor = false }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [showNotificationsMenu, setShowNotificationsMenu] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (userInfo) {
      setUserLoggedIn(true);
    }
    else {
      setUserLoggedIn(false);
    }
  }, [userInfo]);


  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  const toggleNotificationsMenu = () => {
    setShowNotificationsMenu(prev => !prev);
  };

  const toggleSettingsMenu = () => {
    setShowSettingsMenu(prev => !prev);
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
            {!userLoggedIn && (<>
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
            </>
            )}
            {userLoggedIn && (<>
              <li className='nav-item'
                onClick={() => {
                  toggleNotificationsMenu();
                  setShowSettingsMenu(false);
                }}>
                <p
                  className={'nav-links ' + (showNotificationsMenu ? 'nav-links-select' : '')}
                  onClick={closeMobileMenu}
                >
                  <i className="far fa-bell"></i>
                  {/* <i className="fas fa-bell"></i> */}
                  {/* <i className="fas fa-exclamation-circle"></i> */}
                </p>
                <ul className={'sub-menu ' + (showNotificationsMenu ? 'sub-menu-show' : '')}>
                  <li>No new notifications</li>
                  <li>No 2 new notifications</li>
                </ul>
              </li>

              <li className='nav-item'
                onClick={() => {
                  toggleSettingsMenu();
                  setShowNotificationsMenu(false);
                }}>
                <p
                  className={'nav-links ' + (showSettingsMenu ? 'nav-links-select' : '')}
                  onClick={closeMobileMenu}
                >
                  <i className="fas fa-cog"></i>
                </p>
                <ul className={'sub-menu ' + (showSettingsMenu ? 'sub-menu-show' : '')}>
                  <li>
                    <Link to='/#'>
                      <i className="fas fa-user-circle"></i> Account Information
                  </Link>
                  </li>
                  <li onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt"></i> Log Out
                  </li>
                </ul>
              </li>

            </>
            )}

            {!userLoggedIn && (<li>
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
            )}
          </ul>
          {button && !userLoggedIn && <Button buttonStyle='btn--outline' onClick={toggleModal}>LOGIN</Button>}
          <Modal showModal={showModal} setShowModal={setShowModal}> <AuthForm /> </Modal>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
