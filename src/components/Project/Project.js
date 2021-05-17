import React from'react'

import {
  projectSectionTitle,
  projectSectionSubtitle,
  projectListItems
} from '../utils/constants';

function Project({ isProjectSectionOpen }) {

  return(
    <section id='project' className={`project ${isProjectSectionOpen === true ? 'project_open' : ''}`}>
      <h3 className='project__title'>{projectSectionTitle}</h3>
      <p className='project__subtitle'>{projectSectionSubtitle}</p>
      <div className='project__list'>
        {
          projectListItems.slice(0, projectListItems.length).map((item, index) => {
            return (
              <div key={index} className='project__list_item'>
                <img className='project__list_item_image' src={item.imageSrc} />
                <a className='project__list_item_link' href={item.link} target="_blank" rel="noreferrer">
                  <h2 className='project__list_item_title'>
                    {item.name}
                  </h2>
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
