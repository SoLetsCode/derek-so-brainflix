import React from "react";
import { Link } from "react-router-dom";

function Playlist(props) {
  let playlistArray = [];

  playlistArray = props.playlist.map(item => {
    if (item.id === props.currentVideoID) {
      return "";
    }

    return (
      <Link
        className="playlist__react-link"
        id={item.id}
        key={item.id}
        to={`/video/${item.id}`}
      >
        <div className="playlist__card">
          <img className="playlist__img" src={item.image} alt={item.title} />
          <div className="playlist__text-container">
            <span className="playlist__video-title">{item.title}</span>
            <span className="playlist__author">{item.author}</span>
          </div>
        </div>
      </Link>
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
