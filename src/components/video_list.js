import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video, i) => {
    return (
      <VideoListItem
        onVideoSelect={ props.onVideoSelect }
        key={ video.etag }
        video={ video }/>
    );
  });

  return (
    <div className="flex">
      <ul>
        {videoItems}
      </ul>
    </div>
  );
}

export default VideoList;
