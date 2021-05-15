import React from 'react';

import { myContactTitle, myContactSubtitle, myContact } from '../utils/constants';

function Contact() {

  return(
    <section id='section' className='contact' >
      <h3 className='contact__title'>{myContactTitle}</h3>
      <p className='contact__subtitle'>{myContactSubtitle}</p>
      <div className='contact__list'>
      {
        myContact.slice(0, myContact.length).map((item, index) => {
          return (
            <div key={index} className='contact__list_item'>
              <h4 className='contact__list_item_title'>{item.type}</h4>
              <p className='contact__list_item_subtitle'>{item.link}</p>
            </div>
          )
        })
      }
      </div>
    </section>
  )
}

export default Contact;
