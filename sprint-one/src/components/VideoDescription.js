import React from "react";
import VideoInformation from "./VideoInformation";
import Comment from "./Comment";
import Playlist from "./Playlist";

function VideoDescription(props) {
  return (
    <div className="video-description">
      <VideoInformation />
      <Comment comments={props.comments} />
      <Playlist playlist={props.playlist} />
    </div>
  );
}

export default VideoDescription;
