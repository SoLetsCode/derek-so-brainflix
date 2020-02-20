import React, { Component } from "react";
import "./styles/App.css";
import VideoDescription from "./components/VideoDescription";
import Axios from "axios";

const apiKey = "9646c732-3af7-4647-8da4-20fb64fd3c53";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      currentVideo: { comments: [] }
    };
  }

  setCurrentVideo = id => {
    Axios.get(
      `https://project-2-api.herokuapp.com/videos/${id}/?api_key=${apiKey}`
    )
      .then(data => {
        this.setState({
          currentVideo: data.data
        });
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    Axios.get(`https://project-2-api.herokuapp.com/videos/?api_key=${apiKey}`)
      .then(data => {
        let playlist = data.data;
        let currentVideoID = this.props.match.params.id;

        Axios.get(
          `https://project-2-api.herokuapp.com/videos/${currentVideoID}/?api_key=${apiKey}`
        ).then(data => {
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

  componentDidUpdate(prevProps, prevState) {
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
