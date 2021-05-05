import React from'react'

import { projectSectionTitle, projectListItems } from '../utils/constants';

function Project({ isProjectSectionOpen }) {

  return(
    <section className={`project ${isProjectSectionOpen === true ? 'project_open' : ''}`}>
      <h3 className='project__title'>{projectSectionTitle}</h3>
      <div className='project__list'>
        {
          projectListItems.slice(0, projectListItems.length).map((item, index) => {
            return (
              <div key={index} className='project__list_item'>
                {(item.name === 'Учебный проект "News Explorer"' || item.name === 'sergeydenisenko.com') && <img className='project__list_item_image' src='../images/newsexplorer_image.png' />}
                {/* {item.name && <img className='project__list_item_image' src='../images/newsexplorer_image.png' />} */}
                {item.name === 'Учебный проект "MESTO"'  && <img className='project__list_item_image' src='../images/mesto_image.png' />}
                {item.name === 'Учебный проект "Путешествие по России"'  && <img className='project__list_item_image' src='../images/russiantravel_image.png' />}
                {item.name === 'Проект "Mondrian composition"'  && <img className='project__list_item_image' src='../images/mondrian_image.png' />}
                <h3 className='project__list_item_title'>{item.name}</h3>
                {/* <a className='project__list_item_link' href={item.link} target="_blank">
                  Open site
                </a> */}
              </div>
            )
          })
        }
      </div>

    </section>
  )
}

export default Project;
