import React from 'react';
import ReactDOM from 'react-dom';

class Player extends React.Component{
	
	
	render() {		
		console.log(this.state.tracks)
		return (
			<div className="player">
				

				{/* 音频控件  */}
				<audio id="audio" src="http://p3.music.126.net/SR9eFEjRB0NsscxN7-fHMw==/3344714372906000.jpg"></audio>
			</div>
		);
	}
}


export default Player