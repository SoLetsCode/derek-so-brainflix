import React from "react";
import poster from "../assets/images/video-list-0.jpg";

export default function Video() {
  return (
    <div className="video__container">
      <video className="video__video" poster={poster} controls>
        Your browser does not support this video tag
      </video>
    </div>
  );
}
