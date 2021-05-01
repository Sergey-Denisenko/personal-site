import React from 'react';
// import App from '../App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Stack from '../Stack/Stack';
import About from '../About/About';


function App() {

    return (

      <div className="app">
        <div className="page">
            <Header />
            <About />
            <Stack />
              {/* Hello! */}
            <Footer />
        </div>
      </div>
    )
}

export default App;
