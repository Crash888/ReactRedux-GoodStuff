import React from 'react';

const VideoDetail = ( { video }) => {

	//  Check to see if we have a video first.
	if (!video) {
		return (
			<div>Loading...</div>
		);
	}

	const videoId = video.id.videoId;
	//  Gives you a youtube embedded video player
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;
