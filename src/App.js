import React from 'react';
import './App.css';
import Header from "./Components/Elements/Header";

import { GlobalStyle } from './Components/styles/GlobalStyle';
import { Router } from '@reach/router';

import Home from "./Components/Home";
import Movie from "./Components/Movie";
import NotFound from "./Components/NotFound";


const App = () => {
  return(
      <>
        <Header/>
        <Router>
            <Home path="/"/>
            <Movie path="/:movieId" />
            <NotFound default />
        </Router>
        <GlobalStyle/>
    </>
  )
};

export default App;
