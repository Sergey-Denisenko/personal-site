import React from 'react'

import {
  linkToEmptySection,
  linkToProjectSection,
  linkToStackSection,
  linkToContactSection,
} from '../../utils/constants';

function MenuBurger({
  isHeaderMenuOpen,
  handleIsAboutSectionOpen,
  handleIsStackSectionOpen,
  handleIsProjectSectionOpen,
  handleIsContactSectionOpen,
}) {

  return(
    <section className={`menu-burger ${isHeaderMenuOpen === true ? 'menu-burger_open': '' }`}>
      <a className='menu-burger__item' href={linkToEmptySection} onClick={handleIsAboutSectionOpen}>
        <p className='menu-burger__item_title'>Main Page</p>
        {/* <img className='menu-burger__item_image' src='https://www.nsprus.ru/uploads/1024px-Info_Simple_bw.svg.png' /> */}
      </a>
      <a className='menu-burger__item' href={linkToStackSection} onClick={handleIsStackSectionOpen}>
        <p className='menu-burger__item_title'>Stack</p>
        {/* <img className='menu-burger__item_image' src='https://www.clipartmax.com/png/full/124-1244272_skill-computer-icons-computer-software-business-technology-skills-icon-icon-circle.png' /> */}
      </a>
      <a className='menu-burger__item' href={linkToProjectSection} onClick={handleIsProjectSectionOpen}>
        <p className='menu-burger__item_title'>Project</p>
        {/* <img className='menu-burger__item_image' src='https://www.pngkit.com/png/full/335-3350655_projects-projects-icon.png' /> */}
      </a>
      <a className='menu-burger__item' href={linkToContactSection} onClick={handleIsContactSectionOpen}>
        <p className='menu-burger__item_title'>Contact</p>
        {/* <img className='menu-burger__item_image' src='https://bhspecialty.com/wp-content/uploads/2016/01/Contact.png' /> */}
      </a>
    </section>
  )
}

export default MenuBurger;
