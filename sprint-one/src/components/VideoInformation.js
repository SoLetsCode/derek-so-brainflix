import React from "react";
import likeImg from "../assets/icons/svg/icon-likes.svg";
import viewImg from "../assets/icons/svg/icon-views.svg";

export default function VideoInformation() {
  return (
    <div className="videoinfo">
      <h1 className="videoinfo__title">BMX Rampage: 2018 Highlights</h1>
      <div className="videoinfo__author-post-container">
        <p className="videoinfo__author">By Red Cow</p>
        <span className="videoinfo__postdate">12/18/2018</span>
      </div>

      <div className="videoinfo__view-like-container">
        <div className="videoinfo__view-container">
          <img className="videoinfo__view-img" src={viewImg} alt="" />
          <span className="videoinfo__view-count">1,001,023</span>
        </div>
        <div className="videoinfo__like-container">
          <img className="videoinfo__like-img" src={likeImg} alt="" />
          <span className="videoinfo__like-count">110,985</span>
        </div>
      </div>

      <p className="videoinfo__description">
        On a gusty day in Southern Utah, a group of 25 daring mountain bikers
        blew the doors off what is possible on two wheels, unleashing some of
        the biggest moments the sport has ever seen. While mother nature only
        allowed for one full run before the conditions made it impossible to
        ride, that was all that was needed for event veteran Kyle Strait, who
        won the event for the second time -- eight years after his first Red Cow
        Rampage title
      </p>
    </div>
  );
}
