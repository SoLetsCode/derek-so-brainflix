import React from "react";

function Playlist(props) {
  let playlistArray = [];

  playlistArray = props.playlist.map(item => {
    const uuidv4 = require("uuid/v4");
    return (
      <div className="playlist__card" key={uuidv4()} id={uuidv4()}>
        <img className="playlist__img" src={item.src} alt="beautiful" />
        <div className="playlist__text-container">
          <span className="playlist__video-title">{item.title}</span>
          <span className="playlist__author">{item.author}</span>
        </div>
      </div>
    );
  });

  return (
    <div className="playlist">
      <h2 className="playlist__title">NEXT VIDEO</h2>
      {playlistArray}
    </div>
  );
}

export default Playlist;
