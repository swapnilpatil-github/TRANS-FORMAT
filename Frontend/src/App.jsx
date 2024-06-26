import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/pages/Register.jsx';
import Login from './components/pages/Login.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './components/pages/Home.jsx';
import ImageConvertor from './components/features/ImageConvertor.jsx';
import VideoConvertor from './components/features/VideoConvertor.jsx';
import AudioConvertor from './components/features/AudioConvertor.jsx';

function App() {
  return (
   <>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/image" element={<ImageConvertor />} />
          <Route path="/video" element={<VideoConvertor />} />
        
          <Route path="/audio" element={<AudioConvertor />} />
       




        </Routes>
      </div>
    </Router>
   </>
  );
}

export default App;
