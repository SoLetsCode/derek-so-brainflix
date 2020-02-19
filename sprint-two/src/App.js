import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import VideoDescription from "./components/VideoDescription";
import Upload from "./components/Upload";
import Axios from "axios";

const apiKey = "9646c732-3af7-4647-8da4-20fb64fd3c53";

let comments = [
  {
    name: "Michael Lyons",
    date: "12/18/2018",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going.This is still simply the greatest opening of a concert I have EVER witnessed."
  },
  {
    name: "Gary Wong",
    date: "12/12/2018",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board.He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
  },
  {
    name: "Theodore Duncan",
    date: "11/15/2018",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day.Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      currentVideoID: "",
      currentVideo: { comments: [] }
    };
  }
  state = {
    playlist: [],
    currentVideoID: ""
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

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <VideoDescription
              currentVideo={this.state.currentVideo}
              playlist={this.state.playlist}
              currentVideoID={this.state.currentVideoID}
            />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
