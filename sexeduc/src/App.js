import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './component/Acceuil/index';
import VideoPage from './component/VideoPage/index';
import Scene from './component/Scene/index';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/scene" element={<Scene />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
