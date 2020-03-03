import React, { Component } from "react";
import VideoDescription from "./VideoDescription";

class CurrentVideo extends Component {
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
          setCurrentVideo={this.props.setCurrentVideo}
          id={this.props.match.params.id}
          playlist={this.props.playlist}
        />
      </>
    );
  }
}

export default CurrentVideo;
