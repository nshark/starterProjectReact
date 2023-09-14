import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from "./components/Landing Page";
import CSSExample from "./components/CSS example";
import TvShows from "./components/tvShows";
import Sentance from './components/sentance';
function App() {
  return (
    <div className="App-header">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/css-example" element={<CSSExample/>}/>
            <Route path="/tv-shows" element={<TvShows/>}/>
            <Route path="/sentance" element={<Sentance />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
