import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './media.css';
class Media extends PureComponent {
	state = {
    author: 'Benito Moscote'
  	}
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     author: props.author
  //   }
  // //   this.handleClick = this.handleClick.bind(this);
  // }
	//handleClick = (event) => {
		//console.log(this.props.cover);
		//this.setState({
		//	author: 'Ricardo Támara',
		//})
	//}
	render() {
		return (
			
			<div className="Media" onClick={this.props.handleClick}>
        		<div className="Media-cover">
					<img className="Media-cover"
						src={this.props.cover} 
						alt="" 
						width={260}
						height={160}
					/>
					<h3 className="Media-title">{this.props.title}</h3>
					<p className="Media-author">{this.props.author}</p>
				</div>
			</div>
			)
	}
}

Media.propTypes = {
cover: PropTypes.string.isRequired,
title: PropTypes.string.isRequired,
author: PropTypes.string.isRequired,
type: PropTypes.oneOf(['video'], ['audio']),
}
export default Media;