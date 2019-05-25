import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyInfo from './MyInfo';
import MyProjects from './MyProjects';
import { Player } from 'video-react';
import ReactPlayer from 'react-player'


function App() {
  return (
    <div className="App">
      <MyInfo />
      <MyProjects />>
    </div>
  );
}

export default App;
