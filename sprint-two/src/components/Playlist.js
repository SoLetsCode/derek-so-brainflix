import React from "react";

function Playlist(props) {
  let playlistArray = [];

  playlistArray = props.playlist.map(item => {
    if (item.id === props.currentVideoID) {
      return "";
    }

    return (
      <div className="playlist__card" id={item.id} key={item.id}>
        <img className="playlist__img" src={item.image} alt={item.title} />
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
      <div className="playlist__list-container">{playlistArray}</div>
    </div>
  );
}

export default Playlist;
