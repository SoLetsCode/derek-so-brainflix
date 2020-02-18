import React from "react";
import brainFlexLogo from "../assets/logo/Logo-brainflix.svg";
import searchLogo from "../assets/icons/svg/icon-search.svg";
import uploadLogo from "../assets/icons/svg/icon-upload.svg";
import userLogo from "../assets/images/mohan-muruge.jpg";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <img
          className="navbar__img"
          src={brainFlexLogo}
          alt="this is the Brainflix logo"
        />
        <form className="navbar__search-container">
          <img
            className="navbar__search-img"
            src={searchLogo}
            alt="magnifying glass"
          />
          <input
            className="navbar__search-input"
            type="text"
            placeholder="Search"
          />
        </form>
        <div className="navbar__button-user-container">
          <button className="navbar__search-button">
            <img
              className="navbar__upload-img"
              src={uploadLogo}
              alt="plus symbol upload"
            />
            UPLOAD
          </button>
          <img className="navbar__user-img" src={userLogo} alt="user logo" />
        </div>
      </div>
    );
  }
}

export default Navbar;
