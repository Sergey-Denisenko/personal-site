import React from 'react';

import { aboutTitle, aboutSubtitle, mainPageImage } from '../utils/constants';

function About({ isAboutSectionOpen }) {

  return(
    <section className={`about ${isAboutSectionOpen === true ? 'about_open' : '' }`}>
      <div className='about__text-block'>
        <p className='about__title'>
          {aboutTitle}
        </p>
        <p className='about__subtitle'>
          {aboutSubtitle}
        </p>
      </div>
    </section>
  )
}

export default About;
