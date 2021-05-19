import React from 'react';

import {
  stackSectionTitle,
  stackSectionSubtitle,
  stackListItems
} from '../../utils/constants';

function Stack({ isStackSectionOpen }) {

  return(
    <section id='stack' className={`stack ${isStackSectionOpen === true ? 'stack_open' : ''}`}>
      <h3 className='stack__title'>{stackSectionTitle}</h3>
      <p className='stack__subtitle'>{stackSectionSubtitle}</p>
      <div className='stack__list'>
        {
          stackListItems.slice(0, stackListItems.length).map((item, index) => {
            return (
              <div key={index} className='stack__list_item'>
                <img className='stack__list_item_image' src={item.iconLink} />
                <p className='stack__list_item_title'>{item.name}</p>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Stack;
