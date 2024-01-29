import React from "react";
import "./index.css"; // Importez le fichier CSS

const Profile = ({username,mail}) => (
  <div className="profile-container">
    <img
      className="profile-image"
      src="/assets/profile.jpg"
      alt="Profile"
    />
    <div className="profile-name">{username}</div>
    <div className="profile-info">{mail}</div>
  </div>
);

export default Profile;
