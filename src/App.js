import React from 'react'
import "./App.css"
import Home from "./components/Home/Home"
import About from './components/About/About';
import Work from "./components/Works/Work"
import Testimonail from './components/Testimonail/Testimonail';
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
       <Home/>
       <About />
       <Work/>
       <Testimonail/>
       <Contact/>
       <Footer />
    </div>
  );
}

export default App;
