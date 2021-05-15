import React from 'react';
// import App from '../App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Stack from '../Stack/Stack';
import About from '../About/About';
import Project from '../Project/Project';
import MenuBurger from '../MenuBurger/MenuBurger';
import EmptySection from '..//EmptySection/EmptySection';
import Contact from '../Contact/Contact';


function App() {

  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = React.useState(false);
  const [isAboutSectionOpen, setIsAboutSectionOpen] = React.useState(true);
  const [isStackSectionOpen, setIsStackSectionOpen] = React.useState(false);
  const [isProjectSectionOpen, setIsProjectSectionOpen] = React.useState(false);
  const [isContactSectionOpen, setIsContactSectionOpen] = React.useState(false);
  // const [] = React.useState(false);

  const handleIsHeaderMenuOpen = () => {
    setIsHeaderMenuOpen(!isHeaderMenuOpen);
  }
  console.log('isHeaderMenuOpen');
  console.log(isHeaderMenuOpen);

  const handleIsAboutSectionOpen = () => {
    // setIsAboutSectionOpen(!isAboutSectionOpen);
    setIsHeaderMenuOpen(false);
    setIsStackSectionOpen(false);
    setIsProjectSectionOpen(false);
    setIsContactSectionOpen(false);
  }
  const handleIsStackSectionOpen = () => {
    setIsStackSectionOpen(!isStackSectionOpen);
    setIsHeaderMenuOpen(false);
    // setIsAboutSectionOpen(false);
    setIsProjectSectionOpen(false);
    setIsContactSectionOpen(false);
  }
  const handleIsProjectSectionOpen = () => {
    setIsProjectSectionOpen(!isProjectSectionOpen);
    setIsHeaderMenuOpen(false);
    // setIsAboutSectionOpen(false);
    setIsStackSectionOpen(false);
    setIsContactSectionOpen(false);
  }
  const handleIsContactSectionOpen = () => {
    setIsContactSectionOpen(!isContactSectionOpen);
    setIsHeaderMenuOpen(false);
    // setIsAboutSectionOpen(false);
    setIsStackSectionOpen(false);
    setIsProjectSectionOpen(false);
  }

  function onMouseBackgroundOpacity() {
    // document.documentElement.getBoundingClientRect().top = 0;
    // while (true) {
      // console.log(document.documentElement.getBoundingClientRect().bottom);
      // console.log(document.documentElement.clientHeight);

      // let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
      // if (windowRelativeBottom < document.documentElement.clientHeight + 100) {
      //   console.log('Мотаем вверх');
      //   break;
      // }
      // else {console.log('Мотаем вниз');}
    // }
    // window.addEventListener('scroll', function() {
    //   document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
    //   console.log(pageYOffset);
    //   const q = pageYOffset;
    //   if (q < pageYOffset) {
    //     console.log('Мотаем вверх');
    //   } else {console.log('Мотаем вниз');}

    // });
  }
  // window.addEventListener('scroll', onMouseBackgroundOpacity);
  // onMouseBackgroundOpacity();

    return (

      <div className="app">
        <div className="page">
            <Header
              handleIsHeaderMenuOpen={handleIsHeaderMenuOpen}
              isHeaderMenuOpen={isHeaderMenuOpen}
            />
            <About isAboutSectionOpen={isAboutSectionOpen} />
            <EmptySection />
            <Project isProjectSectionOpen={isProjectSectionOpen} />
            <Stack isStackSectionOpen={isStackSectionOpen} />
            <MenuBurger
              isHeaderMenuOpen={isHeaderMenuOpen}
              handleIsAboutSectionOpen={handleIsAboutSectionOpen}
              handleIsStackSectionOpen={handleIsStackSectionOpen}
              handleIsProjectSectionOpen={handleIsProjectSectionOpen}
              handleIsContactSectionOpen={handleIsContactSectionOpen}
            />
              {/* Hello! */}
              <Contact />
            <Footer />
        </div>
      </div>
    )
}

export default App;
