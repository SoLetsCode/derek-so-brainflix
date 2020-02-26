import React from "react";

export default function Video({ playlist }) {
  return (
    <div className="video__container">
      <video
        className="video__video"
        poster={playlist.image}
        key={`${playlist.video}/?api_key=9646c732-3af7-4647-8da4-20fb64fd3c53`}
        controls
      >
        <source
          src={`${playlist.video}/?api_key=9646c732-3af7-4647-8da4-20fb64fd3c53`}
          type="video/mp4"
        ></source>
        Your browser does not support this video tag
      </video>
    </div>
  );
}
