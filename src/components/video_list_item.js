import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
        console.log(video);

  return (
    <li onClick={() => onVideoSelect(video)} className='video-list-item'>
      <div className='media-left'>
        <img src={imageUrl} className='video-thumb' />
      </div>
      <div className='media-body'>
        <h2 className='media-heading'>{video.snippet.title}</h2>
        <p>{video.snippet.channelTitle}</p>
      </div>
    </li>
  );
};

export default VideoListItem;
