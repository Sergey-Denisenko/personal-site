import React from 'react'

function MenuBurger({ isHeaderMenuOpen }) {

  return(
    <section className={`menu-burger ${isHeaderMenuOpen === true ? 'menu-burger_open': '' }`}>
      <div className='menu-burger__item'>1</div>
      <div className='menu-burger__item'>2</div>
      <div className='menu-burger__item'>3</div>
      <div className='menu-burger__item'>4</div>
    </section>
  )
}

export default MenuBurger;
