import React from "react";
import "../styles/profileCard.css";
import navia from "../assets/navia.jpeg";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src={navia} alt="Profile" className="profile-picture" />
        <div className="profile-info">
          <h2>Navia</h2>
          <p className="status">● Active</p>
        </div>
      </div>
      <div className="menu">
        <div className="menu-item">
          <i className="fas fa-user-cog"></i>
          <span>Account Settings</span>
        </div>
        <div className="menu-item">
          <i className="fas fa-bell-slash"></i>
          <span>Pause Notifications</span>
        </div>
        <div className="menu-item">
          <i className="fas fa-user"></i>
          <span>Profile</span>
        </div>
        <div className="menu-item">
          <i className="fas fa-cog"></i>
          <span>Settings</span>
        </div>
        <div className="menu-item">
          <i className="fas fa-sign-out-alt"></i>
          <span>Sign Out</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
