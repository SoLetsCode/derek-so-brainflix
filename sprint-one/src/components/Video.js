import React from "react";
import poster from "../assets/images/video-list-0.jpg";

export default function Video(props) {
  return (
    <div className="video__container">
      <video className="video__video" poster={props.playlist.src} controls>
        Your browser does not support this video tag
      </video>
    </div>
  );
}
