import React, {Component} from 'react';

class Video extends Component {
	tooglePlay() {
		if (this.props.pause) {
			this.video.play()
		}else{
			this.video.pause()
		}
		
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.pause !== this.props.pause) {
			this.tooglePlay();
		}
	}
	setRef = element => {
		this.video = element;
	}
	render() {
		return (
				 <video
          autoPlay={this.props.autoPlay}
          src={this.props.src}
          ref={this.setRef}
        />
			)
	}
}

export default Video;