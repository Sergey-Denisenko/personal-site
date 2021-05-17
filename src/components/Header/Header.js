import React from 'react';

import { headerLogoText } from '../utils/constants';
// import iconMenuBlackPath from '../images/icon-menu-black.png';
import iconMenuWhitePath from '../images/icon-menu-white.png';
import { iconMenuImageAlt } from '../utils/constants';

function Header({
  handleIsHeaderMenuOpen,
}) {
  return (
    <header className='header'>
        <div className='header__button'>{headerLogoText}</div>
        <img className='header__button' src={iconMenuWhitePath} alt={iconMenuImageAlt} onClick={handleIsHeaderMenuOpen} />
    </header>
  );
}

export default Header;
