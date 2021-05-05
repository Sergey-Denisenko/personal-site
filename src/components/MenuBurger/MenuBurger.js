import React from 'react'

function MenuBurger({
  isHeaderMenuOpen,
  handleIsAboutSectionOpen,
  handleIsStackSectionOpen,
  handleIsProjectSectionOpen,
  handleIsContactSectionOpen,
}) {

  return(
    <section className={`menu-burger ${isHeaderMenuOpen === true ? 'menu-burger_open': '' }`}>
      <div className='menu-burger__item' onClick={handleIsAboutSectionOpen} >
      <img className='menu-burger__item_image' src='https://www.nsprus.ru/uploads/1024px-Info_Simple_bw.svg.png' />
        <p className='menu-burger__item_title'>About</p>
      </div>
      <div className='menu-burger__item' onClick={handleIsStackSectionOpen} >
        <img className='menu-burger__item_image' src='https://www.clipartmax.com/png/full/124-1244272_skill-computer-icons-computer-software-business-technology-skills-icon-icon-circle.png' />
        <p className='menu-burger__item_title'>Stack</p>
      </div>
      <div className='menu-burger__item' onClick={handleIsProjectSectionOpen} >
        <img className='menu-burger__item_image' src='https://www.pngkit.com/png/full/335-3350655_projects-projects-icon.png' />
        <p className='menu-burger__item_title'>Project</p>
      </div>
      <div className='menu-burger__item' onClick={handleIsContactSectionOpen} >
        <img className='menu-burger__item_image' src='https://bhspecialty.com/wp-content/uploads/2016/01/Contact.png' />
        <p className='menu-burger__item_title'>Contact</p>
      </div>
    </section>
  )
}

export default MenuBurger;
