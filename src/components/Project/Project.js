import React from'react'

import { projectSectionTitle, projectListItems } from '../utils/constants';

function Project() {

  return(
    <section className='project'>
      <h3 className='project__title'>{projectSectionTitle}</h3>
      <div className='project__list'>
        {
          projectListItems.slice(0, projectListItems.length).map((item, index) => {
            return (
              <div key={index} className='project__list_item'>
                <h3 className='project__list_item_title'>{item.name}</h3>
                <a className='project__list_item_link' href={item.link} target="_blank">
                  Open site
                </a>
              </div>
            )
          })
        }
      </div>

    </section>
  )
}

export default Project;
