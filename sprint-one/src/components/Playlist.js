import React from "react";

function Playlist(props) {
  let playlistArray = [];

  playlistArray = props.playlist.map(item => {
    return (
      <div className="playlist__card">
        <img className="playlist-img" src={item.src} alt="beautiful" />
        <div className="playlist__text-container">
          <span className="playlist__title">{item.title}</span>
          <span className="playlist__author">{item.author}</span>
        </div>
      </div>
    );
  });

  return (
    <div className="playlist">
      <h2 className="playlist__title">Next Video</h2>
      {playlistArray}
    </div>
  );
}

export default Playlist;
