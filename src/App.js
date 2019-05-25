import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyInfo from './MyInfo';
import { Player } from 'video-react';
import ReactPlayer from 'react-player'


function App() {
  return (
    <div className="App">
      <MyInfo />
      <ReactPlayer url='https://youtu.be/vsE2Q5T--8o'/>
      <ReactPlayer url='https://youtu.be/V-6HR2zln8k'/>
      <ReactPlayer url='https://youtu.be/90gPXAhlPMw'/>
      <ReactPlayer url='https://youtu.be/70LmEmo09mc'/>
    </div>
  );
}

export default App;
