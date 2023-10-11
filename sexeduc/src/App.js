import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VideoPage from './component/VideoPage/index';
import Scene from './component/Scene/index';
import { Game } from './game.js'; 


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/scene" element={<Scene />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
