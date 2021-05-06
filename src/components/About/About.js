import React from 'react';

import { aboutTitle, aboutSubtitle, mainPageImage } from '../utils/constants';
import visualImagePath from '../images/visual.png';
// import visualImagePath from '../images/visual.png';

function About({ isAboutSectionOpen }) {



  return(
    <section className={`about ${isAboutSectionOpen === true ? 'about_open' : '' }`}>

      {/* <div className='about__section'></div> */}
      {/* <div className='about__section about__section_center'> */}
        <div className='about__visual'>
          <img className='about__visual_image' src={visualImagePath} alt={mainPageImage} />
          <span className='about__visual_fly-text'>
            <p>
              Life is code...
            </p>
          </span>
        </div>

        <div className='about__text-block'>
          <p className='about__title'>
            {aboutTitle}
          </p>
          <p className='about__subtitle'>
            {aboutSubtitle}
          </p>
          <p className='about__subtitle'>
            Я Frontend разработчик из России. Люблю кодить, и всеми силами развиваю этот навык.
          </p>
        </div>
      {/* </div> */}
      {/* <div className='about__section'></div> */}

    </section>
  )
}

export default About;