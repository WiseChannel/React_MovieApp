import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

import Home from "./Components/Home";

function App() {
  return (
      <div className='App'>
          <Header/>
          <Home/>
          <Main/>
          <Footer/>
     </div>
  );
}

export default App;
