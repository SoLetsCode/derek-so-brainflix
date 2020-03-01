import React from "react";
import image from "../assets/images/upload-video-preview.jpg";

function Upload(props) {
  const publishClick = event => {
    event.preventDefault();
    console.log(event.target.form);

    let uploadedVideo = {
      title: event.target.form.videoTitle.value,
      channel: `Mega Mohan`,
      description: event.target.form.videoDescription.value,
      image: "https://i.imgur.com/GLUMomv.jpg"
    };

    console.log(uploadedVideo);
    event.target.form.reset();
  };

  return (
    <div className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <div className="upload__image-form-container">
        <div className="upload__image-container">
          <h2 className="upload__image-title">VIDEO THUMBNAIL</h2>
          <img className="upload__image" src={image} alt="bike handlebars" />
        </div>
        <form
          action="submit"
          className="upload__form"
          name="uploadForm"
          id="uploadForm"
        >
          <label className="upload__video-title-label">TITLE YOUR VIDEO</label>
          <input
            className="upload__video-title-input"
            type="text"
            name="videoTitle"
            placeholder="Add a title to your video"
            autoComplete="off"
          />
          <label className="upload__video-description-label">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            className="upload__video-description-input"
            name="videoDescription"
            form="uploadForm"
            placeholder="Add a description of your video"
          ></textarea>
        </form>
      </div>
      <div className="upload__publish-cancel-container">
        <button
          className="upload__publish-button"
          form="uploadForm"
          type="submit"
          onClick={publishClick}
        >
          PUBLISH
        </button>
        <button className="upload__cancel-button">CANCEL</button>
      </div>
    </div>
  );
}

export default Upload;
