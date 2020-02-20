import React from "react";
import { Link } from "react-router-dom";
import brainFlexLogo from "../assets/logo/Logo-brainflix.svg";
import searchLogo from "../assets/icons/svg/icon-search.svg";
import uploadLogo from "../assets/icons/svg/icon-upload.svg";
import userLogo from "../assets/images/mohan-muruge.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <Link to={`/`}>
        <img
          className="navbar__img"
          src={brainFlexLogo}
          alt="this is the Brainflix logo"
        />
      </Link>
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
        <Link className="navbar__upload-link" to="/upload">
          <button className="navbar__upload-button">
            <img
              className="navbar__upload-img"
              src={uploadLogo}
              alt="plus symbol upload"
            />
            UPLOAD
          </button>
        </Link>
        <img className="navbar__user-img" src={userLogo} alt="user logo" />
      </div>
    </div>
  );
}

export default Navbar;
