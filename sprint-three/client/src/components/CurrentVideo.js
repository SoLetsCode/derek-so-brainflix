import React, { Component } from "react";
import VideoDescription from "./VideoDescription";

class CurrentVideo extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (this.props.match.params.id !== this.props.currentVideo.id) {
      this.props.setCurrentVideo(this.props.match.params.id);
    }
  }

  render() {
    return (
      <>
        <VideoDescription
          currentVideo={this.props.currentVideo}
          playlist={this.props.playlist}
        />
      </>
    );
  }
}

export default CurrentVideo;
