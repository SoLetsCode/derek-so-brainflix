import React from "react";
import mohanImg from "../assets/images/mohan-muruge.jpg";
import axios from "axios";

function Comment({ comments, id, setCurrentVideo }) {
  function convertTimestampToDateString(timestamp) {
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

  const commentClick = event => {
    event.preventDefault();
    axios
      .post(`/api/videos/${id}/comment`, {
        comment: event.target.usercomment.value
      })
      .then(res => {
        setCurrentVideo(id);
      })
      .catch(err => console.log(err));

    event.target.reset();
  };

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
        <form
          action=""
          onSubmit={commentClick}
          className="comments__form"
          id="comments-form"
        >
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
