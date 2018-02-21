import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import FormattedTime from '../../widgets/helpers/formattedTime'
class VideoPlayer extends Component {
  state = {
  		pause:true,
      duration: 0,
      currentTime: 0
  	}
  	tooglePlay = (event) => {
  		this.setState({
  			pause: !this.state.pause
  		})
  	}
  componentDidMount(){
  	this.setState({
  		pause: (!this.props.autoplay),
  	})
  }
  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: FormattedTime(this.video.duration)
    })
  }
  handleTimeUpdate = event => {
    console.log(this.video.currentTime)
    this.setState({
      currentTime: FormattedTime(this.video.currentTime)
    })
  }
  render() {
    return (
    	<div>
      <VideoPlayerLayout>
       <div>
       	<Title
       		title="esto es un super video"
       	/>
        <Controls>
          <PlayPause 
          pause = {this.state.pause}
          handleClick ={this.tooglePlay}
          />
          <Timer  
            duration = {this.state.duration}
            currentTime = {this.state.currentTime}
          />
        </Controls>
       	
       	<Video
       	autoPlay = {this.props.autoplay}
       	pause={this.state.pause}
        handleLoadedMetadata = {this.handleLoadedMetadata}
        handleTimeUpdate={this.handleTimeUpdate}
       	src= "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
       />
       </div>
      </VideoPlayerLayout></div>
    )
  }
}

export default VideoPlayer;