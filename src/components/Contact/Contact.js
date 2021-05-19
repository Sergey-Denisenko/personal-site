import React from 'react';

import { myContactTitle, myContactSubtitle, myContact } from '../../utils/constants';

function Contact() {

  return(
    <section id='contact' className='contact' >
      <h3 className='contact__title'>{myContactTitle}</h3>
      <p className='contact__subtitle'>{myContactSubtitle}</p>
      <div className='contact__list'>
      {
        myContact.slice(0, myContact.length).map((item, index) => {
          return (
            <div key={index} className='contact__list_item'>
              <h4 className='contact__list_item_title'>{item.type}</h4>
              {
                item.link.includes('https://' || 'http://')
                ?
                <a className='contact__list_item_link' href={item.link} target="_blank" rel="noreferrer">
                  <p className='contact__list_item_subtitle'>{item.name}</p>
                </a>
                :
                item.name.includes('@' && '.')
                ?
                <a className='contact__list_item_link' href={item.link} target="_blank" rel="noreferrer">
                  <p className='contact__list_item_subtitle'>{item.name}</p>
                </a>
                :
                ''
              }
            </div>
          )
        })
      }
      </div>
    </section>
  )
}

export default Contact;
