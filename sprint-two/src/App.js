import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import VideoDescription from "./components/VideoDescription";
import Upload from "./components/Upload";
import Axios from "axios";

const apiKey = "9646c732-3af7-4647-8da4-20fb64fd3c53";

class App extends Component {
  state = {
    playlist: [],
    currentVideoID: "",
    currentVideo: { comments: [] }
  };

  setCurrentVideo = id => {
    Axios.get(
      `https://project-2-api.herokuapp.com/videos/${id}/?api_key=${apiKey}`
    )
      .then(data => {
        this.setState({
          currentVideoID: id,
          currentVideo: data.data
        });
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    Axios.get(`https://project-2-api.herokuapp.com/videos/?api_key=${apiKey}`)
      .then(data => {
        let playlist = data.data;
        let currentVideoID = data.data[0].id;

        Axios.get(
          `https://project-2-api.herokuapp.com/videos/${currentVideoID}/?api_key=${apiKey}`
        ).then(data => {
          this.setState({
            playlist: playlist,
            currentVideoID: currentVideoID,
            currentVideo: data.data
          });
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate fired");
    console.log("previous props are", prevProps);
    console.log("previous state is", prevState);
    // if (this.props.match.params.id !== prevProps.match.params.id) {
    //   console.log("it doesn't match!");
    //   this.setState({
    //     currentVideoID: renderProp.match.params.id
    //   });
    // }
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            render={renderProps => {
              return (
                <VideoDescription
                  currentVideo={this.state.currentVideo}
                  playlist={this.state.playlist}
                  currentVideoID={this.state.currentVideoID}
                  setCurrentVideo={this.setCurrentVideo}
                  {...renderProps}
                />
              );
            }}
          />
          <Route
            path="/video/:id"
            exact
            render={renderProps => {
              if (renderProps.match.params.id !== this.state.currentVideoID) {
                this.setCurrentVideo(renderProps.match.params.id);
              }
              return (
                <VideoDescription
                  currentVideo={this.state.currentVideo}
                  playlist={this.state.playlist}
                  currentVideoID={this.state.currentVideoID}
                  setCurrentVideo={this.setCurrentVideo}
                  {...renderProps}
                />
              );
            }}
          />
          <Route path="/upload" component={Upload} />
        </Switch>
      </Router>
    );
  }
}

export default App;
