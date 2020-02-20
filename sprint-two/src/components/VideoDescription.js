import React from "react";
import VideoInformation from "./VideoInformation";
import Comment from "./Comment";
import Playlist from "./Playlist";
import Video from "./Video";

function VideoDescription(props) {
  return (
    <>
      <Video playlist={props.currentVideo} />
      <div className="video-description">
        <div className="video-description__left">
          <VideoInformation currentVideo={props.currentVideo} />
          <Comment comments={props.currentVideo.comments} />
        </div>
        <div className="video-description__right">
          <Playlist
            playlist={props.playlist}
            currentVideoID={props.currentVideoID}
            setCurrentVideo={props.setCurrentVideo}
          />
        </div>
      </div>
    </>
  );
}

export default VideoDescription;
