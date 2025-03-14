import React from 'react';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <HelloWorld name = "ZShaan0"/>

        <Routes>
          <Route exact path='/'
            element={<h1 className='font-bold text-2xl'>This is the home page</h1>} />

          <Route path='/about-us'
          element={<h1 className="text-xl">This is the About Us page</h1>} />
        </Routes>


        <Counter/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

