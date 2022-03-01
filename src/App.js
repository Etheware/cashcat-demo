import './App.css';
import React from "react";
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Body from './components/body/Body';
import Home from './components/home/Home';
import VideoPanel from './components/RecommendedVideos/videoPanel';

function App() {
  return (
      <div className="app">
        {/* Header */}
        <Header />
        <VideoPanel />
        <Sidebar />
        
          
      </div>
  );
}

export default App;
