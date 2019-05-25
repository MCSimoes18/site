import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Player } from 'video-react';
import ReactPlayer from 'react-player'

class MyInfo extends React.Component {
  render () {
      return (
        <div>
        <ReactPlayer url='https://youtu.be/vsE2Q5T--8o'/>
        <ReactPlayer url='https://youtu.be/V-6HR2zln8k'/>
        <ReactPlayer url='https://youtu.be/90gPXAhlPMw'/>
        <ReactPlayer url='https://youtu.be/70LmEmo09mc'/>
        </div>
      )
    }
  }

export default MyInfo
