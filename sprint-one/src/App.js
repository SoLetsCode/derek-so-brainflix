import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import VideoDescription from "./components/VideoDescription";

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
    },
    {
      src: "http://localhost:3000/images/video-list-3.jpg",
      title: "Cheap Airline Tickets Great Ways To Save",
      author: "Emily Harper"
    },
    {
      src: "http://localhost:3000/images/video-list-4.jpg",
      title: "Take A Romantic Break In A Boutique Hotel",
      author: "Ethan Owen"
    },
    {
      src: "http://localhost:3000/images/video-list-5.jpg",
      title: "Choose The Perfect Accommodations",
      author: "Lydia Perez"
    },
    {
      src: "http://localhost:3000/images/video-list-6.jpg",
      title: "Cruising Destination Ideas",
      author: "Timothy Austin"
    },
    {
      src: "http://localhost:3000/images/video-list-7.jpg",
      title: "Train Travel On Track For Safety",
      author: "Scotty Cranmer"
    }
  ];

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

  return (
    <div className="App">
      <Navbar />
      <Video />
      <VideoDescription comments={comments} playlist={playlist} />
    </div>
  );
};

export default App;
