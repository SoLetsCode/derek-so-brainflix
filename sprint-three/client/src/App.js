import React, { Component } from "react";
import Navbar from "./components/Navbar";
import CurrentVideo from "./components/CurrentVideo";
import Upload from "./components/Upload";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Axios from "axios";
import "./styles/App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      currentVideo: { comments: [] }
    };
  }

  setPlaylist = () => {
    Axios.get(`/api/videos`).then(data => {
      let playlist = data.data;
      console.log("i got ran", playlist);
      Axios.get(`/api/videos/`).then(data => {
        this.setState({
          playlist: playlist
        });
      });
    });
  };

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
        let currentVideoID = data.data[0].id;
        Axios.get(`/api/videos/${currentVideoID}`).then(data => {
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

  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path="/">
          <Redirect to="/video/1af0jruup5gu" />
        </Route>
        <Route
          path="/video/:id"
          render={props => (
            <CurrentVideo
              playlist={this.state.playlist}
              setCurrentVideo={this.setCurrentVideo}
              currentVideo={this.state.currentVideo}
              {...props}
            />
          )}
        />
        <Route
          path="/upload"
          render={props => <Upload setPlaylist={this.setPlaylist} {...props} />}
        />
      </Router>
    );
  }
}
