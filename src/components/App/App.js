import React from 'react';
// import App from '../App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Stack from '../Stack/Stack';
import About from '../About/About';
import Project from '../Project/Project';
import MenuBurger from '../MenuBurger/MenuBurger';


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
    setIsAboutSectionOpen(!isAboutSectionOpen);
    setIsHeaderMenuOpen(false);
    setIsStackSectionOpen(false);
    setIsProjectSectionOpen(false);
    setIsContactSectionOpen(false);
  }
  const handleIsStackSectionOpen = () => {
    setIsStackSectionOpen(!isStackSectionOpen);
    setIsHeaderMenuOpen(false);
    setIsAboutSectionOpen(false);
    setIsProjectSectionOpen(false);
    setIsContactSectionOpen(false);
  }
  const handleIsProjectSectionOpen = () => {
    setIsProjectSectionOpen(!isProjectSectionOpen);
    setIsHeaderMenuOpen(false);
    setIsAboutSectionOpen(false);
    setIsStackSectionOpen(false);
    setIsContactSectionOpen(false);
  }
  const handleIsContactSectionOpen = () => {
    setIsContactSectionOpen(!isContactSectionOpen);
    setIsHeaderMenuOpen(false);
    setIsAboutSectionOpen(false);
    setIsStackSectionOpen(false);
    setIsProjectSectionOpen(false);
  }

    return (

      <div className="app">
        <div className="page">
            <Header
              handleIsHeaderMenuOpen={handleIsHeaderMenuOpen}
              isHeaderMenuOpen={isHeaderMenuOpen}
            />
            <About isAboutSectionOpen={isAboutSectionOpen} />
            <Stack isStackSectionOpen={isStackSectionOpen} />
            <Project isProjectSectionOpen={isProjectSectionOpen} />
            <MenuBurger
              isHeaderMenuOpen={isHeaderMenuOpen}
              handleIsAboutSectionOpen={handleIsAboutSectionOpen}
              handleIsStackSectionOpen={handleIsStackSectionOpen}
              handleIsProjectSectionOpen={handleIsProjectSectionOpen}
              handleIsContactSectionOpen={handleIsContactSectionOpen}
            />
              {/* Hello! */}
            <Footer />
        </div>
      </div>
    )
}

export default App;
