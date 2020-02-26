import React from "react";
import likeImg from "../assets/icons/svg/icon-likes.svg";
import viewImg from "../assets/icons/svg/icon-views.svg";

export default function VideoInformation({ currentVideo }) {
  function convertTimestampToDateString(timestamp) {
    // 1000 ms in 1s
    // 60,000 ms in 1min
    // 3,600,000 ms in 1 hour
    // 7,200,000
    // 86,400,000 ms in 1 Day
    let timeDifference = Date.now() - timestamp;

    if (timeDifference < 60000) {
      return `${Math.floor(timeDifference / 1000)} s ago`;
    } else if (timeDifference < 3600000) {
      return `${Math.floor(timeDifference / 60000)} minutes ago`;
    } else if (timeDifference < 7200000) {
      return `1 hour ago`;
    } else if (timeDifference < 86400000) {
      return `${Math.floor(timeDifference / 3600000)} hours ago`;
    }

    let date = new Date(timestamp);
    let dateString = `${date.getMonth() +
      1}/${date.getDate()}/${date.getFullYear()}`;

    return dateString;
  }

  return (
    <div className="videoinfo">
      <h1 className="videoinfo__title">{currentVideo.title}</h1>
      <div className="videoinfo__author-date-view-like-container">
        <div className="videoinfo__author-post-container">
          <p className="videoinfo__author">By {currentVideo.channel}</p>
          <span className="videoinfo__postdate">
            {convertTimestampToDateString(currentVideo.timestamp)}
          </span>
        </div>

        <div className="videoinfo__view-like-container">
          <div className="videoinfo__view-container">
            <img className="videoinfo__view-img" src={viewImg} alt="" />
            <span className="videoinfo__view-count">{currentVideo.views}</span>
          </div>
          <div className="videoinfo__like-container">
            <img className="videoinfo__like-img" src={likeImg} alt="" />
            <span className="videoinfo__like-count">{currentVideo.likes}</span>
          </div>
        </div>
      </div>

      <p className="videoinfo__description">{currentVideo.description}</p>
    </div>
  );
}
