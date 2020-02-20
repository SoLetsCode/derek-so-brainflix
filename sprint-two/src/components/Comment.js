import React from "react";
import mohanImg from "../assets/images/mohan-muruge.jpg";

function Comment({ comments }) {
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

  let commentList = comments.map(comment => {
    return (
      <div className="comments__card" id={comment.id} key={comment.id}>
        <div className="comments__card-left">
          <div className="comments__card-image" />
        </div>
        <div className="comments__card-right">
          <div className="comments__card-right-top">
            <p className="comments__card-name">{comment.name}</p>
            <p className="comments__card-date">
              {convertTimestampToDateString(comment.timestamp)}
            </p>
          </div>
          <div className="comments__card-right-bottom">
            <p className="comments__card-comment">{comment.comment}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="comments">
      <h1 className="comments__title">{comments.length} Comments</h1>
      <div className="comments__input-container">
        <div className="comments__image-container">
          <img src={mohanImg} alt="user icon" className="comments__image" />
        </div>
        <form action="" className="comments__form" id="comments-form">
          <div className="comments__user-input-container">
            <label className="comments__user-input-label">
              JOIN THE CONVERSATION
            </label>
            <textarea
              className="comments__user-input-field"
              name="usercomment"
              form="comments-form"
              cols="30"
              rows="10"
              placeholder="Add a new comment"
            ></textarea>
          </div>
          <input
            type="submit"
            value="COMMENT"
            className="comments__form-button"
          />
        </form>
      </div>
      {commentList}
    </section>
  );
}

export default Comment;
