import React from "react";
import mohanImg from "../assets/images/mohan-muruge.jpg";

function Comment({ comments }) {
  const uuidv4 = require("uuid/v4");
  let commentList = comments.map(comment => {
    return (
      <div className="comments__card" id={uuidv4()} key={uuidv4()}>
        <div className="comments__card-left">
          <div className="comments__card-image" />
        </div>
        <div className="comments__card-right">
          <div className="comments__card-right-top">
            <p className="comments__card-name">{comment.name}</p>
            <p className="comments__card-date">{comment.date}</p>
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
      <h1 className="comments__title">3 Comments</h1>
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
