import React from 'react';

const VideoDetail = ({video}) => {
  if(!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className='video-detail'>
      <div className='video-box'>
        <iframe className='video-embed' src={url} allowFullScreen ></iframe>
      </div>
      <div className='video-info'>
        <h1>{video.snippet.title}</h1>
        <p className="channel">{video.snippet.channelTitle}</p>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};
/*+'?autoplay=1'*/
export default VideoDetail;
