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
      <a href='#emptySection'>
      <div className='menu-burger__item' onClick={handleIsAboutSectionOpen} >
      <img className='menu-burger__item_image' src='https://www.nsprus.ru/uploads/1024px-Info_Simple_bw.svg.png' />
        <p className='menu-burger__item_title'>Main Page</p>
      </div>
      </a>
      <a href='#stack'>
      <div className='menu-burger__item' onClick={handleIsStackSectionOpen} >
        <img className='menu-burger__item_image' src='https://www.clipartmax.com/png/full/124-1244272_skill-computer-icons-computer-software-business-technology-skills-icon-icon-circle.png' />
        <p className='menu-burger__item_title'>Stack</p>
      </div>
      </a>
      <a href='#project'>
      <div className='menu-burger__item' onClick={handleIsProjectSectionOpen} >
        <img className='menu-burger__item_image' src='https://www.pngkit.com/png/full/335-3350655_projects-projects-icon.png' />
        <p className='menu-burger__item_title'>Project</p>
      </div>
      </a>
      <a href='#contact'>
      <div className='menu-burger__item' onClick={handleIsContactSectionOpen} >
        <img className='menu-burger__item_image' src='https://bhspecialty.com/wp-content/uploads/2016/01/Contact.png' />
        <p className='menu-burger__item_title'>Contact</p>
      </div>
      </a>
    </section>
  )
}

export default MenuBurger;
