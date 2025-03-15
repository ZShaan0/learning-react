import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Views/Home';
import AboutUs from './Views/AboutUs';



function App() {
  return (
    <div>
      <Router>
        <Header/>

        <div className="p-3">
          <Routes>
            <Route exact path='/'
              element={<Home />} />

            <Route path='/about-us'
            element={<AboutUs />} />
          </Routes>
        </div>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;


