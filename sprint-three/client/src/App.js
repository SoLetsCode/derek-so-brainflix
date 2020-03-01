import React, { Component } from "react";
import "./styles/App.css";
import VideoDescription from "./components/VideoDescription";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      currentVideo: { comments: [] }
    };
  }

  setCurrentVideo = id => {
    Axios.get(`/api/videos/${id}`)
      .then(data => {
        this.setState({
          currentVideo: data.data
        });
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    Axios.get(`/api/videos`)
      .then(data => {
        let playlist = data.data;
        let currentVideoID = this.props.match.params.id;
        console.log(currentVideoID);
        console.log("I get here");
        Axios.get(`/api/videos/${currentVideoID}`).then(data => {
          console.log(playlist);
          console.log(data);
          this.setState({
            playlist: playlist,
            currentVideo: data.data
          });
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate() {
    if (this.props.match.params.id !== this.state.currentVideo.id) {
      this.setCurrentVideo(this.props.match.params.id);
    }
  }

  render() {
    return (
      <>
        <VideoDescription
          currentVideo={this.state.currentVideo}
          playlist={this.state.playlist}
        />
      </>
    );
  }
}

export default App;
