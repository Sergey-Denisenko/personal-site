import React from 'react';
import { Link } from 'react-router-dom';
// import Navigation from '../Navigation/Navigation';
import iconMenuBlackPath from '../images/icon-menu-black.png';
import iconMenuWhitePath from '../images/icon-menu-white.png';

import {
  // headerLogoText,
  // routePathMainPage,
  iconMenuImageAlt,
} from '../utils/constants';

// import { headerTitle, headerSubtitle } from '../utils/constants';

function Header({
  // handleHeaderMenuOpenClick,
  // isHeaderMenuOpen,
  // handleHeaderAuthButtonClick,
  // routePathAuth,
  // handleSavedNewsPageLinkClick,
  // isSavedNewsPageOpen,
  // handleMainPageLinkClick,
  // isMainPageOpen,
  // loggedIn,
  // onSignOut,
  handleIsHeaderMenuOpen,
  isHeaderMenuOpen,
}) {
  return (
    <header className='header'>
            {/* <div className='header__section'></div> */}
      {/* <div className='header__section header__section_center'> */}
        <div className='header__button'>sergeydenisenko.com</div>
        {/* <div className='header__button'>Menu</div> */}
        <img className='header__button' src={iconMenuWhitePath} alt={iconMenuImageAlt} onClick={handleIsHeaderMenuOpen} />
      {/* </div> */}
      {/* <div className='header__section'></div> */}

      {/* <div className='header__section'></div>
      <div className='header__section header__section_center'>
        <p className='header__title'>
          {headerTitle}
        </p>
        <p className='header__subtitle'>
          {headerSubtitle}
        </p>
      </div>
      <div className='header__section'></div> */}

    </header>
    // <header className={`header ${isHeaderMenuOpen === true ? 'header_mobile-color-back-dark' : ''} ${isSavedNewsPageOpen === true ? 'header_color-background' : ''} `}>

    //   <Link
    //     to={routePathMainPage}
    //     className={`header__logo-text ${(isSavedNewsPageOpen === true  && isHeaderMenuOpen === false) ? 'header__logo-text_dark-style' : ''}`}
    //     onClick={handleMainPageLinkClick}
    //   >
    //     {headerLogoText}
    //   </Link>
    //   <Navigation
    //     handleHeaderMenuOpenClick={handleHeaderMenuOpenClick}
    //     isHeaderMenuOpen={isHeaderMenuOpen}
    //     routePathAuth={routePathAuth}
    //     handleHeaderAuthButtonClick={handleHeaderAuthButtonClick}
    //     handleSavedNewsPageLinkClick={handleSavedNewsPageLinkClick}
    //     isSavedNewsPageOpen={isSavedNewsPageOpen}
    //     handleMainPageLinkClick={handleMainPageLinkClick}
    //     isMainPageOpen={isMainPageOpen}
    //     loggedIn={loggedIn}
    //     onSignOut={onSignOut}
    //   />
    // </header>
  );
}

export default Header;
