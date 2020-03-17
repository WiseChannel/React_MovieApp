import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";

import {GlobalStyle} from './Components/styles/GlobalStyle';

import Home from "./Components/Home";


const App = () => {
  return(
      <>
        <Header/>
        <Home/>
        <GlobalStyle/>
    </>
  )
}

export default App;
