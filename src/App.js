import React from 'react';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>

      <HelloWorld name = "ZShaan0"/>

      <Counter/>

      <Footer/>
    </div>
  );
}

export default App;
