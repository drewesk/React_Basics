import React from 'react';

const VideoDetail = ({ video }) => {
  if(!video) {
    return (
      <div className="loading-cycle">
        Loading...
      </div>
    );
  }

  const imageDesc = video.snippet.description;
  const imageTitle = video.snippet.title;
  const videoId = video.id.videoId;
  const URL = `https://www.youtube.com/embed/${ videoId }`;

  return (

    <div className="video-detail col-md-6">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item"
                src={ URL }>
        </iframe>
      </div>
      <div className="details">
        <div className="detail-title"><h3>{ imageTitle }</h3></div>
        <div className="detail-description">{ imageDesc }</div>
      </div>
    </div>
  );
}

export default VideoDetail;
