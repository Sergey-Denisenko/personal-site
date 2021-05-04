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
  // const [] = React.useState(false);

  const handleIsHeaderMenuOpen = () => {
    setIsHeaderMenuOpen(!isHeaderMenuOpen);
  }
  console.log('isHeaderMenuOpen');
  console.log(isHeaderMenuOpen);

    return (

      <div className="app">
        <div className="page">
            <Header  handleIsHeaderMenuOpen={handleIsHeaderMenuOpen} isHeaderMenuOpen={isHeaderMenuOpen} />
            <About />
            <Stack />
            <Project />
            <MenuBurger isHeaderMenuOpen={isHeaderMenuOpen} />
              {/* Hello! */}
            <Footer />
        </div>
      </div>
    )
}

export default App;
