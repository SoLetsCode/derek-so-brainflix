import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import VideoDescription from "./components/VideoDescription";
import Playlist from "./components/Playlist";

//quick create component rcc + tab with ES7 React snippets (class component) rfc + tab for functional components

const App = () => {
  let playlist = [
    {
      src: "http://localhost:3000/images/video-list-0.jpg",
      title: "Become A Travel Pro in One Easy Lesson",
      author: "Scotty Cranmer"
    },
    {
      src: "http://localhost:3000/images/video-list-1.jpg",
      title: "Les Houches The Hidden Gem Of The...",
      author: "Scotty Cranmer"
    },
    {
      src: "http://localhost:3000/images/video-list-2.jpg",
      title: "Travel Health Useful Medical Information...",
      author: "Scotty Cranmer"
    }
    // {
    //   src: "../assets/images/video-list-3.jpg",
    //   title: "Cheap Airline Tickets Great Ways To Save",
    //   author: "Emily Harper"
    // },
    // {
    //   src: "../assets/images/video-list-4.jpg",
    //   title: "Take A Romantic Break In A Boutique Hotel",
    //   author: "Ethan Owen"
    // },
    // {
    //   src: "../assets/images/video-list-5.jpg",
    //   title: "Choose The Perfect Accommodations",
    //   author: "Lydia Perez"
    // },
    // {
    //   src: "../assets/images/video-list-6.jpg",
    //   title: "Cruising Destination Ideas",
    //   author: "Timothy Austin"
    // },
    // {
    //   src: "../assets/images/video-list-7.jpg",
    //   title: "Train Travel On Track For Safety",
    //   author: "Scotty Cranmer"
    // }
  ];

  return (
    <div className="App">
      <Navbar />
      <Video />
      <VideoDescription />
      <Playlist playlist={playlist} />
    </div>
  );
};

export default App;
