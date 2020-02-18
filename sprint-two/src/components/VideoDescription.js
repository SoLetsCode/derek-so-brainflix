import React from "react";
import VideoInformation from "./VideoInformation";
import Comment from "./Comment";
import Playlist from "./Playlist";

function VideoDescription(props) {
  return (
    <div className="video-description">
      <div className="video-description__left">
        <VideoInformation />
        <Comment comments={props.comments} />
      </div>
      <div className="video-description__right">
        <Playlist playlist={props.playlist} />
      </div>
    </div>
  );
}

export default VideoDescription;
