import React from "react";

const TopSection = () => {
  return (
    <>
      <div className="top-section">
        <div className="header_div">
          <img
            id="profile__img"
            src={require("./profile__img.png")}
            alt="profile__img"
          />
          <div className="overlay">
            <img id="ig-icon" src={require("./Icon.png")} alt="camera-icon" />
          </div>
        </div>
        <img
          id="share-icon"
          src={require("./share-icon.png")}
          alt="share-icon"
        />
        <div id="mobile_menu">
          <img
            id="mobile-btn"
            src={require("./mobile-btn.png")}
            alt="mobile-btn"
          />
        </div>

        <p id="twitter">@simicodes</p>
        <p id="slack">OffiongDev</p>
      </div>
    </>
  );
};

export default TopSection;
