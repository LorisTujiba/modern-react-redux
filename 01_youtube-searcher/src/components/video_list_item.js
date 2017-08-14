import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const theVideo = video.snippet;
  return(
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={theVideo.thumbnails.default.url}/>
        </div>
        <div className="media-body">
          <div className="media-heading">
            {theVideo.title}
          </div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;
