import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";

//quick create component rcc + tab with ES7 React snippets (class component) rfc + tab for functional components

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;